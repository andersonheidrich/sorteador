import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Style from "../styles";
import { generateAmericanFormatRounds, groupPlayers } from "../utils";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Single = () => {
  const [playerListText, setPlayerListText] = useState("");
  const [players, setPlayers] = useState([]);
  const [numRounds, setNumRounds] = useState(3);
  const [numGroups, setNumGroups] = useState(1);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const addPlayerList = () => {
    const rawList = playerListText.split(/\r?\n|,/);
    const cleanedList = rawList
      .map((name) => name.replace(/^\s*\d+\s*[-.:]?\s*/g, "").trim())
      .filter((name) => name.length > 0 && !players.includes(name));
    setPlayers([...players, ...cleanedList]);
    setPlayerListText("");
    setError("");
  };

  const removePlayer = (nameToRemove) => {
    setPlayers(players.filter((name) => name !== nameToRemove));
  };

  const handleDraw = () => {
    if (numGroups > players.length) {
      setError(
        "O número de grupos não pode ser maior que o número de jogadores."
      );
      return;
    }
    const grouped = groupPlayers(players, numGroups);
    const roundsByGroup = grouped.map((group) =>
      generateAmericanFormatRounds(group, numRounds)
    );
    setNumRounds(roundsByGroup);
    setError("");
    navigate("/simples/grupos", {
      state: { rounds: roundsByGroup, players: grouped },
    });
  };

  return (
    <Style.Container>
      <Style.Title>
        <h1>Formato Simples</h1>
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
                  max={players.length}
                />
              </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Style.Button
              className="groups-button"
              onClick={handleDraw}
              disabled={players.length < 4}
            >
              Sortear Grupos
            </Style.Button>
          </Style.Groups>
        </Style.Column>
      </Style.Content>
    </Style.Container>
  );
};

export default Single;
