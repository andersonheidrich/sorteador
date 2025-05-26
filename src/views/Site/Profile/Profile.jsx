import React, { useState } from "react";
import * as Style from "./Profile.styles";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "Teste da Silva",
    sports: [],
    email: "",
    password: "",
  });
  const [newSport, setNewSport] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSportChange = (index, category) => {
    const updatedSports = [...form.sports];
    updatedSports[index].category = category;
    setForm((prev) => ({ ...prev, sports: updatedSports }));
  };

  const addSport = () => {
    if (newSport && !form.sports.find((s) => s.name === newSport)) {
      setForm((prev) => ({
        ...prev,
        sports: [...prev.sports, { name: newSport, category: "" }],
      }));
      setNewSport("");
    }
  };

  const removeSport = (index) => {
    const updated = [...form.sports];
    updated.splice(index, 1);
    setForm((prev) => ({ ...prev, sports: updated }));
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
      <Style.Profile>
        <Style.Content>
          <Style.Title>Meu Perfil</Style.Title>
          {error && <Style.Error>{error}</Style.Error>}
          <Style.Boxes>
            <Style.LeftBox>
              <Style.Subtitle>Meus Dados:</Style.Subtitle>
              <form onSubmit={handleSubmit}>
                <span>Nome:</span>
                <Style.Input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={form.name}
                  onChange={handleChange}
                />
                <span>E-mail:</span>
                <Style.Input
                  type="email"
                  name="email"
                  placeholder="Novo e-mail (opcional)"
                  value={form.email}
                  onChange={handleChange}
                />
                <span>Senha:</span>
                <Style.Input
                  type="password"
                  name="password"
                  placeholder="Nova senha (opcional)"
                  value={form.password}
                  onChange={handleChange}
                />
                <span>Adicionar Esporte:</span>
                <Style.AddSport>
                  <Style.Select
                    value={newSport}
                    onChange={(e) => setNewSport(e.target.value)}
                    style={{ marginRight: "16px" }}
                  >
                    <option value="">Selecionar</option>
                    <option value="beach-tennis">Beach Tennis</option>
                    <option value="padel">Padel</option>
                    <option value="tenis">Tênis</option>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                    <option value="e">E</option>
                    <option value="f">F</option>
                  </Style.Select>
                  <Style.Button
                    type="button"
                    onClick={addSport}
                    className="add-button"
                  >
                    Adicionar
                  </Style.Button>
                </Style.AddSport>
              </form>
            </Style.LeftBox>
            <Style.RightBox>
              <Style.Subtitle>Meus Esportes:</Style.Subtitle>
              <Style.Cards>
                {form.sports.map((sport, index) => (
                  <Style.Card key={index}>
                    <div className="sport">{sport.name}</div>
                    <div className="category">
                      <span>Categoria:</span>
                      <Style.Select
                        value={sport.category}
                        onChange={(e) =>
                          handleSportChange(index, e.target.value)
                        }
                        style={{ marginBottom: "8px" }}
                      >
                        <option value="">Selecionar</option>
                        <option value="E">E</option>
                        <option value="D">D</option>
                        <option value="C">C</option>
                        <option value="B">B</option>
                        <option value="A">A</option>
                        <option value="Pro">Pro</option>
                      </Style.Select>
                    </div>
                    <div className="delete-card">
                      <Style.Button
                        type="button"
                        onClick={() => removeSport(index)}
                      >
                        Remover
                      </Style.Button>
                    </div>
                  </Style.Card>
                ))}
              </Style.Cards>
            </Style.RightBox>
          </Style.Boxes>
        </Style.Content>
        <Style.Button type="submit" className="save-button">
          Salvar Alterações
        </Style.Button>
      </Style.Profile>
    </Style.Container>
  );
};

export default Profile;
