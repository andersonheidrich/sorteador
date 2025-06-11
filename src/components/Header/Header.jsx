import { useNavigate } from "react-router-dom";
import * as Style from "./Header.styles";
import { useState } from "react";
import LogoIMG from "../../images/logo.png";

const Header = () => {
  const [showSandwich, setShowSandwich] = useState(false);

  const toggleSandwich = () => {
    setShowSandwich(!showSandwich);
  };

  const navigate = useNavigate();

  return (
    <Style.Container>
      <Style.Navigation>
        <Style.Logo>
          <img src={LogoIMG} onClick={() => navigate("/")} />
        </Style.Logo>
        <Style.Menu className={showSandwich ? "show" : ""}>
          <div className="menu-sandwich" onClick={toggleSandwich}>
            <div className="brand" />
            <div className="brand" />
            <div className="brand" />
          </div>
          <div className="nav-menu">
            <div
              className="menu-item"
              onClick={() => {
                setShowSandwich(!showSandwich);
                navigate("/");
              }}
            >
              <span>Início</span>
            </div>
            <div
              className="menu-item"
              onClick={() => {
                setShowSandwich(!showSandwich);
                navigate("/sorteio");
              }}
            >
              <span>Sorteio</span>
            </div>
            <div
              className="menu-item"
              onClick={() => {
                setShowSandwich(!showSandwich);
                navigate("/login");
              }}
            >
              <span>Login</span>
            </div>
            <div
              className="menu-item"
              onClick={() => {
                setShowSandwich(!showSandwich);
                navigate("/perfil");
              }}
            >
              <span>Meu Perfil</span>
            </div>
          </div>
        </Style.Menu>
      </Style.Navigation>
    </Style.Container>
  );
};

export default Header;
