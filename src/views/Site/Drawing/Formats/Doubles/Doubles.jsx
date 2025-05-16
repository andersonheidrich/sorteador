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

    setEntries(lines);
    setInputText("");
    setGroups([]); // limpa grupos anteriores
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
        duplasAleatorias.push(shuffled[i]); // sozinho
      }
    }

    return [...duplasFixas, ...duplasAleatorias];
  };

  const sortGroups = () => {
    const duplas = generateDuplas();
    const shuffled = shuffleArray(duplas);
    const grupos = [];
    let i = 0;

    while (i < shuffled.length) {
      const remaining = shuffled.length - i;

      if (remaining === 4 || remaining === 2) {
        grupos.push(shuffled.slice(i, i + remaining));
        break;
      } else {
        grupos.push(shuffled.slice(i, i + 3));
        i += 3;
      }
    }

    // Gerar rodadas (rounds) a partir dos grupos
    const rounds = grupos.map((grupo) => {
      const partidas = [];
      for (let i = 0; i < grupo.length; i++) {
        for (let j = i + 1; j < grupo.length; j++) {
          const dupla1 = grupo[i].split(" e ").map(cleanName);
          const dupla2 = grupo[j].split(" e ").map(cleanName);
          partidas.push({ dupla1, dupla2 });
        }
      }

      // Agrupar as partidas em rodadas (simples: cada partida é uma rodada)
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
              placeholder="Digite um nome ou uma dupla por linha"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </Style.AddPlayersInput>
          <Style.ButtonGroup>
            <Style.Button
              className="add-player"
              style={{ backgroundColor: "#218d3a" }}
              onClick={parseInput}
            >
              Adicionar
            </Style.Button>
            <Style.Button
              className="remove-players"
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
                  onClick={() => removeEntry(name)}
                />
              </li>
            ))}
          </ul>
          <Style.Groups>
            <Style.Button className="groups-button" onClick={sortGroups}>
              Sortear Grupos
            </Style.Button>
          </Style.Groups>
        </Style.Column>
      </Style.Content>
    </Style.Container>
  );
};

export default Doubles;
