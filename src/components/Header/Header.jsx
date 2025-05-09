import { useNavigate } from "react-router-dom";
import * as Style from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Style.Container>
      <Style.Navigation>
        <Style.Home>
          <div>
            <span onClick={() => navigate("/")}>Home</span>
          </div>
        </Style.Home>
        <Style.Menu>
          <div className="store-nav">
            <div className="store-menu-item">
              <span onClick={() => navigate("/americano")}>Americano</span>
            </div>
            <div className="store-menu-item">
              <span onClick={() => navigate("/duplas")}>Duplas</span>
            </div>
            <div className="store-menu-item">
              <span onClick={() => navigate("/simples")}>Simples</span>
            </div>
          </div>
        </Style.Menu>
      </Style.Navigation>
    </Style.Container>
  );
};

export default Header;
