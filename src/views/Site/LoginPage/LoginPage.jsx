import React, { useState } from "react";
import * as Style from "./LoginPage.styles";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const url = isRegister
      ? "https://suaapi.com/api/register"
      : "https://suaapi.com/api/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Erro ao autenticar. Verifique os dados.");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      alert(
        isRegister ? "Cadastro realizado com sucesso!" : "Login realizado!"
      );
      setError("");

      // Redirecionar após login/cadastro
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Style.Container>
      <Style.Box>
        <Style.Title>{isRegister ? "Cadastrar" : "Entrar"}</Style.Title>
        {error && <Style.ErrorText>{error}</Style.ErrorText>}
        <form onSubmit={handleAuth}>
          <Style.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Style.Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Style.Button type="submit">
            {isRegister ? "Cadastrar" : "Entrar"}
          </Style.Button>
        </form>
        <Style.ToggleText onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Já possui conta? Faça login"
            : "Não possui conta? Cadastre-se"}
        </Style.ToggleText>
      </Style.Box>
    </Style.Container>
  );
};

export default LoginPage;
