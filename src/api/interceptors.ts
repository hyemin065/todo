import axios from 'axios';
import { updateAccessToken } from './axiosPublic';
import { getLocalStorageToken } from '../utils';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

let isAlreadyFetchingAccessToken = false;
let subscribers: any[] = [];

function signOut() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}

const addSubscriber = (callback: any) => {
  subscribers.push(callback);
};

const onAccessTokenFetched = (accessToken: string) => {
  subscribers.forEach((callback) => callback(accessToken));
  subscribers = [];
};

const updateTokenAndRetryRequest = async (error: any) => {
  const { response: errorResponse } = error;
  const originalConfig = error?.config;

  const token = getLocalStorageToken();
  try {
    const retryOriginalRequest = new Promise((resolve, reject) => {
      addSubscriber((accessToken: string) => {
        try {
          errorResponse.config.headers.Authorization = `Bearer ${accessToken}`;
          resolve(instance(originalConfig));
        } catch (error) {
          reject(error);
        }
      });
    });
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;

      const res = await updateAccessToken(token?.refreshToken);
      if (res) {
        localStorage.setItem(
          'token',
          JSON.stringify({ refreshToken: token?.refreshToken, accessToken: res.token }),
        );

        isAlreadyFetchingAccessToken = false;
        onAccessTokenFetched(res.token);
      }
    }
    return retryOriginalRequest;
  } catch (error) {
    //리프레쉬 토큰 업데이트 실패했을때 or 기간 만료되었을때 => 강제로그아웃
    signOut();
    alert('로그아웃 되었습니다');
    return Promise.reject(error);
  }
};
//요청 인터셉터
instance.interceptors.request.use(
  (request) => {
    const token = getLocalStorageToken();

    if (token) {
      request.headers.Authorization = `Bearer ${token.accessToken}`;
    } else {
      //토큰이 없을때 => 로그인해주세요 알림, 로그인 페이지로 보냄
      signOut();
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.data.statusCode === 401) {
      const res = await updateTokenAndRetryRequest(error);
      return res;
    }
    return Promise.reject(error);
  },
);
