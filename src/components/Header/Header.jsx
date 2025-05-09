import { useNavigate } from "react-router-dom";
import * as Style from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Style.Container>
      <Style.Navigation>
        <Style.Home>
          <div className="menu-item">
            <span onClick={() => navigate("/")}>Home</span>
          </div>
        </Style.Home>
        <Style.Menu>
          <div className="menu-item">
            <span onClick={() => navigate("/americano")}>Americano</span>
          </div>
          <div className="menu-item">
            <span onClick={() => navigate("/duplas")}>Duplas</span>
          </div>
          <div className="menu-item">
            <span onClick={() => navigate("/simples")}>Simples</span>
          </div>
        </Style.Menu>
      </Style.Navigation>
    </Style.Container>
  );
};

export default Header;
