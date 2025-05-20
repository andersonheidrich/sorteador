import * as Style from "../styles";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Doubles = () => {
  const [inputText, setInputText] = useState("");
  const [entries, setEntries] = useState([]);
  const [groups, setGroups] = useState([]);

  const navigate = useNavigate();

  const parseInput = () => {
    const lines = inputText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");

    setEntries((prev) => [...prev, ...lines]);
    setInputText("");
  };

  const removeEntry = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const cleanName = (name) => {
    return name.replace(/^\d+\.\s*/, "").trim();
  };

  const generateDuplas = () => {
    const duplasFixas = [];
    const jogadoresIndividuais = [];

    entries.forEach((entry) => {
      if (entry.toLowerCase().includes(" e ")) {
        duplasFixas.push(entry);
      } else {
        jogadoresIndividuais.push(entry);
      }
    });

    const shuffled = shuffleArray(jogadoresIndividuais);
    const duplasAleatorias = [];

    for (let i = 0; i < shuffled.length; i += 2) {
      if (i + 1 < shuffled.length) {
        duplasAleatorias.push(`${shuffled[i]} e ${shuffled[i + 1]}`);
      } else {
        duplasAleatorias.push(shuffled[i]);
      }
    }

    return [...duplasFixas, ...duplasAleatorias];
  };

  const sortGroups = () => {
    const duplas = generateDuplas();

    const duplasComJogadorSozinho = duplas.filter((d) => !d.includes(" e "));
    if (duplasComJogadorSozinho.length > 0) {
      const count = duplasComJogadorSozinho.length;
      alert(
        `Existe(m) ${count} jogador(es) sozinho(s) sem dupla. Por favor, adicione mais jogador(es) para formar as duplas ou ajuste as entradas.`
      );
      return;
    }

    const shuffled = shuffleArray(duplas);
    let grupos = [];

    const totalDuplas = shuffled.length;
    const gruposDeTres = Math.floor(totalDuplas / 3);
    let resto = totalDuplas % 3;

    let i = 0;
    for (; i < gruposDeTres * 3; i += 3) {
      grupos.push(shuffled.slice(i, i + 3));
    }

    const duplasRestantes = shuffled.slice(i);

    if (duplasRestantes.length === 1) {
      const duplaExtra = duplasRestantes[0];

      const grupoParaDividir = grupos.find((g) => g.length === 3);
      if (!grupoParaDividir) {
        alert("Não é possível reorganizar os grupos com a dupla restante.");
        return;
      }

      grupos = grupos.filter((g) => g !== grupoParaDividir);

      const novosGrupos = [
        [grupoParaDividir[0], grupoParaDividir[1]],
        [grupoParaDividir[2], duplaExtra],
      ];

      grupos.push(...novosGrupos);
    } else if (duplasRestantes.length === 2 || duplasRestantes.length === 4) {
      for (let j = 0; j < duplasRestantes.length; j += 2) {
        grupos.push(duplasRestantes.slice(j, j + 2));
      }
    } else if (duplasRestantes.length !== 0) {
      alert(
        `Número inválido de duplas restantes (${duplasRestantes.length}). Ajuste para múltiplos de 3 ou sobras de 1, 2 ou 4.`
      );
      return;
    }

    const rounds = grupos.map((grupo) => {
      const partidas = [];
      for (let i = 0; i < grupo.length; i++) {
        for (let j = i + 1; j < grupo.length; j++) {
          const dupla1 = grupo[i].split(" e ").map(cleanName);
          const dupla2 = grupo[j].split(" e ").map(cleanName);
          partidas.push({ dupla1, dupla2 });
        }
      }
      return partidas.map((partida) => [partida]);
    });

    setGroups(grupos);
    navigate("/sorteio/duplas/grupos", {
      state: { rounds, players: grupos },
    });
  };

  return (
    <Style.Container>
      <Style.Title>
        <h1>Formato de Duplas</h1>
      </Style.Title>
      <Style.Content>
        <Style.Column>
          <Style.Subtitle>
            <h2>Lista de Jogadores ou Duplas:</h2>
          </Style.Subtitle>
          <Style.AddPlayersInput>
            <textarea
              rows="24"
              placeholder="Digite um nome ou uma dupla por linha (Ex: Jogador 1 e Jogador 2)"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </Style.AddPlayersInput>
          <Style.ButtonGroup>
            <Style.Button
              style={{ backgroundColor: "#218d3a" }}
              onClick={parseInput}
            >
              Adicionar
            </Style.Button>
            <Style.Button
              style={{ backgroundColor: "#dc3545" }}
              onClick={() => setInputText("")}
            >
              Limpar
            </Style.Button>
          </Style.ButtonGroup>
        </Style.Column>
        <Style.Column>
          <Style.Subtitle>
            <h2>Jogadores / Duplas ({entries.length}):</h2>
          </Style.Subtitle>
          <ul className="player-list">
            {entries.map((name, index) => (
              <li className="player" key={index}>
                <div className="player-name">{name}</div>
                <RemoveCircleIcon
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => removeEntry(index)}
                />
              </li>
            ))}
          </ul>
          <Style.Groups>
            <Style.Button onClick={sortGroups}>Sortear Grupos</Style.Button>
          </Style.Groups>
        </Style.Column>
      </Style.Content>
    </Style.Container>
  );
};

export default Doubles;
