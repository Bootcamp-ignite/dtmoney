import { Container, Content } from "./styles";

import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dtmoney" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
