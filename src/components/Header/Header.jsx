import { useNavigate } from "react-router-dom";
import * as Style from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Style.Container>
      <Style.Navigation>
        <Style.Menu>
          <div className="menu-item">
            <span onClick={() => navigate("/")}>Início</span>
          </div>
          <div className="menu-item">
            <span onClick={() => navigate("/sorteio")}>Sorteio</span>
          </div>
          <div className="menu-item">
            <span onClick={() => navigate("/login")}>Login</span>
          </div>
          {/* <div className="menu-item">
            {isLoggedIn ? (
              <span onClick={handleLogout}>Logout</span>
            ) : (
              <span onClick={handleLogin}>Login</span>
            )}
          </div> */}
        </Style.Menu>
      </Style.Navigation>
    </Style.Container>
  );
};

export default Header;
