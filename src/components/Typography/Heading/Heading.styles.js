import styled, { css } from 'styled-components';
import { space, layout, color, typography } from 'styled-system';

const cssHeading = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

export const H1 = styled.h1`
  ${cssHeading}
`;

export const H2 = styled.h2`
  ${cssHeading}
`;

export const H3 = styled.h3`
  ${cssHeading}
`;

export const H4 = styled.h4`
  ${cssHeading}
`;

export const H5 = styled.h5`
  ${cssHeading}
`;

export const H6 = styled.h6`
  ${cssHeading}
`;
