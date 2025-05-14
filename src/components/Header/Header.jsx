import { useNavigate } from "react-router-dom";
import * as Style from "./Header.styles";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aqui você pode integrar com sua lógica real de login
    setIsLoggedIn(true);
    navigate("/login");
  };

  const handleLogout = () => {
    // Aqui você pode integrar com sua lógica real de logout
    setIsLoggedIn(false);
    navigate("/");
  };

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
            {isLoggedIn ? (
              <span onClick={handleLogout}>Logout</span>
            ) : (
              <span onClick={handleLogin}>Login</span>
            )}
          </div>
        </Style.Menu>
      </Style.Navigation>
    </Style.Container>
  );
};

export default Header;
