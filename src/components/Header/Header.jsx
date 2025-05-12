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
            <span onClick={() => navigate("/sorteio")}>Sorteio</span>
          </div>
          <div className="menu-item">
            <span onClick={() => navigate("/login")}>Login</span>
          </div>
        </Style.Menu>
      </Style.Navigation>
    </Style.Container>
  );
};

export default Header;
