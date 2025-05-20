import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Style from "../styles";
import { generateAmericanFormatRounds, groupPlayers } from "../utils";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const American = () => {
  const [playerListText, setPlayerListText] = useState("");
  const [players, setPlayers] = useState([]);
  const [numGroups, setNumGroups] = useState(1);
  const [roundsResult, setRoundsResult] = useState([]);

  const navigate = useNavigate();

  const addPlayerList = () => {
    const rawList = playerListText.split(/\r?\n|,/);
    const cleanedList = rawList
      .map((name) => name.replace(/^\s*\d+\s*[-.:]?\s*/g, "").trim())
      .filter((name) => name.length > 0 && !players.includes(name));
    setPlayers([...players, ...cleanedList]);
    setPlayerListText("");
  };

  const removePlayer = (nameToRemove) => {
    setPlayers(players.filter((name) => name !== nameToRemove));
  };

  const handleDraw = () => {
    const totalPlayers = players.length;

    if (totalPlayers === 0) {
      alert("Adicione jogadores antes de sortear.");
      return;
    }

    if (totalPlayers % 4 !== 0) {
      alert("O número de jogadores deve ser divisível por 4.");
      return;
    }

    const expectedGroups = totalPlayers / 4;

    if (numGroups !== expectedGroups) {
      alert(
        `Você deve formar exatamente ${expectedGroups} grupo(s) para ${totalPlayers} jogadores.`
      );
      return;
    }

    const grouped = groupPlayers(players, numGroups);

    const isValid = grouped.every((group) => group.length === 4);
    if (!isValid) {
      alert(
        "Todos os grupos devem conter exatamente 4 jogadores. Sorteio cancelado."
      );
      return;
    }

    const roundsByGroup = grouped.map((group) =>
      generateAmericanFormatRounds(group, 3)
    );

    setRoundsResult(roundsByGroup);

    navigate("/sorteio/americano/grupos", {
      state: { rounds: roundsByGroup, players: grouped },
    });
  };

  return (
    <Style.Container>
      <Style.Title>
        <h1>Formato Americano</h1>
      </Style.Title>
      <Style.Content>
        <Style.Column>
          <Style.Subtitle>
            <h2>Lista de Jogadores:</h2>
          </Style.Subtitle>
          <Style.AddPlayersInput>
            <textarea
              rows="24"
              placeholder="Um nome por linha ou separados por vírgula"
              value={playerListText}
              onChange={(e) => setPlayerListText(e.target.value)}
            />
          </Style.AddPlayersInput>
          <Style.ButtonGroup>
            <Style.Button
              className="add-player"
              style={{ backgroundColor: "#218d3a" }}
              onClick={addPlayerList}
            >
              Adicionar
            </Style.Button>
            <Style.Button
              className="remove-players"
              style={{ backgroundColor: "#dc3545" }}
              onClick={() => setPlayerListText("")}
            >
              Limpar
            </Style.Button>
          </Style.ButtonGroup>
        </Style.Column>

        <Style.Column>
          <Style.Subtitle>
            <h2>Jogadores ({players.length}):</h2>
          </Style.Subtitle>
          <ul className="player-list">
            {players.map((name, index) => (
              <li className="player" key={index}>
                <div className="player-name">{name}</div>
                <RemoveCircleIcon
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => removePlayer(name)}
                />
              </li>
            ))}
          </ul>

          <Style.Groups>
            <div className="groups-config">
              <div className="groups-number">
                <h3>Número de grupos:</h3>
                <input
                  type="number"
                  value={numGroups}
                  onChange={(e) => setNumGroups(Number(e.target.value))}
                  min={1}
                  max={Math.floor(players.length / 4)}
                />
              </div>
            </div>

            <Style.Button onClick={handleDraw} disabled={players.length < 4}>
              Sortear Grupos
            </Style.Button>
          </Style.Groups>
        </Style.Column>
      </Style.Content>
    </Style.Container>
  );
};

export default American;
