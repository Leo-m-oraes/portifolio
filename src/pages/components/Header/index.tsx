import NavLink from './navLink';
import { Container } from './styles';

// eslint-disable-next-line import/prefer-default-export
export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </ul>
    </Container>
  );
}
