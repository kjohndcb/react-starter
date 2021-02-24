import styled from 'styled-components';

export const Root = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1em;
  background: #333;
  a {
    color: ${({ theme }) => theme.colors.link};
    margin: 0 1rem;
  }
`;
