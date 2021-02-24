import { NavLink } from 'react-router-dom';

import { Root } from './Header.styles';

export default function Header() {
  return (
    <Root>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </Root>
  );
}
