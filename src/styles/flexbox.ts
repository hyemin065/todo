import { css } from 'styled-components';

export const flexbox = (js = 'center', al: 'center') => css`
  display: flex;
  justify-content: ${js};
  align-items: ${al};
`;
