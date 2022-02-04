import { css } from 'styled-components';

export const mediumScreen = props => {
  return css`
    @media only screen and (max-width: 1250px) {
      ${props}
    }
  `;
};

export const smallScreen = props => {
  return css`
    @media only screen and (max-width: 1060px) {
      ${props}
    }
  `;
};

export const mobile = props => {
  return css`
    @media only screen and (max-width: 460px) {
      ${props}
    }
  `;
};

