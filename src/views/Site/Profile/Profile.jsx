import React, { useEffect, useState } from "react";
import * as Style from "./Profile.styles";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    category: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login");
  //     return;
  //   }

  //   fetch("https://suaapi.com/api/me", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Erro ao buscar dados");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setForm({
  //         name: data.name || "",
  //         category: data.category || "",
  //         email: data.email || "",
  //         password: "", // sempre vazio por segurança
  //       });
  //     })
  //     .catch((err) => setError(err.message));
  // }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("https://suaapi.com/api/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Erro ao atualizar perfil");
      alert("Perfil atualizado com sucesso!");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Style.Container>
      <Style.Box>
        <Style.Title>Editar Perfil</Style.Title>
        {error && <Style.Error>{error}</Style.Error>}
        <form onSubmit={handleSubmit}>
          <Style.Input
            type="text"
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
          />
          <Style.Select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Selecione a categoria</option>
            <option value="E">E</option>
            <option value="D">D</option>
            <option value="C">C</option>
            <option value="B">B</option>
            <option value="A">A</option>
            <option value="Pro">Pro</option>
          </Style.Select>
          <Style.Input
            type="email"
            name="email"
            placeholder="Novo e-mail (opcional)"
            value={form.email}
            onChange={handleChange}
          />
          <Style.Input
            type="password"
            name="password"
            placeholder="Nova senha (opcional)"
            value={form.password}
            onChange={handleChange}
          />
          <Style.Button type="submit">Salvar Alterações</Style.Button>
        </form>
      </Style.Box>
    </Style.Container>
  );
};

export default Profile;
