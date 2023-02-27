import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.textGradient : props.theme.textHighlight};
    transition: all 0.5s ease-in-out;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.secondary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
