import { Container, Content, Details } from './styles';

import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <Details>
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </Details>

        <img src={logo} alt="Logo" />
      </Content>

    </Container>
  );
}
