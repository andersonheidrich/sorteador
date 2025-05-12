// import React, { useState } from "react";
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
    const result = [];
    let i = 0;

    while (i < shuffled.length) {
      const remaining = shuffled.length - i;

      if (remaining === 4 || remaining === 2) {
        result.push(shuffled.slice(i, i + remaining));
        break;
      } else {
        result.push(shuffled.slice(i, i + 3));
        i += 3;
      }
    }

    setGroups(result);
    navigate("/duplas/grupos", {
      state: { rounds: result, players: groups },
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

// const Doubles = () => {
//   const [doublesListText, setDoublesListText] = useState("");
//   const [entries, setEntries] = useState([]);
//   const [groups, setGroups] = useState(1);
//   const [error, setError] = useState("");

//   const addDoubleList = () => {
//     if (doublesListText.trim() !== "") {
//       setEntries([...entries, doublesListText.trim()]);
//       setDoublesListText("");
//     }
//   };

//   const removeEntry = (index) => {
//     const updated = [...entries];
//     updated.splice(index, 1);
//     setEntries(updated);
//   };

//   const shuffleArray = (array) => {
//     return [...array].sort(() => Math.random() - 0.5);
//   };

//   const generateDuplas = () => {
//     const duplasFixas = [];
//     const jogadoresIndividuais = [];

//     // Separar duplas e jogadores
//     entries.forEach((entry) => {
//       if (entry.toLowerCase().includes(" e ")) {
//         duplasFixas.push(entry);
//       } else {
//         jogadoresIndividuais.push(entry);
//       }
//     });

//     const shuffled = shuffleArray(jogadoresIndividuais);
//     const duplasAleatorias = [];

//     for (let i = 0; i < shuffled.length; i += 2) {
//       if (i + 1 < shuffled.length) {
//         duplasAleatorias.push(`${shuffled[i]} e ${shuffled[i + 1]}`);
//       } else {
//         // Último jogador sozinho vira uma "dupla incompleta"
//         duplasAleatorias.push(shuffled[i]);
//       }
//     }

//     return [...duplasFixas, ...duplasAleatorias];
//   };

//   const sortGroups = () => {
//     const duplas = generateDuplas();
//     const shuffled = shuffleArray(duplas);
//     const result = [];
//     let i = 0;

//     while (i < shuffled.length) {
//       const remaining = shuffled.length - i;

//       if (remaining === 4 || remaining === 2) {
//         result.push(shuffled.slice(i, i + remaining));
//         break;
//       } else {
//         result.push(shuffled.slice(i, i + 3));
//         i += 3;
//       }
//     }

//     setGroups(result);
//     setError("");
//   };

//   return (
//     <Style.Container>
//       <Style.Title>
//         <h1>Formato de Duplas</h1>
//       </Style.Title>
//       <Style.Content>
//         <Style.Column>
//           <Style.Subtitle>
//             <h2>Lista de Jogadores ou Duplas:</h2>
//           </Style.Subtitle>
//           <Style.AddPlayersInput>
//             <textarea
//               rows="24"
//               placeholder="Um nome ou dupla por linha ou separados por vírgula"
//               value={doublesListText}
//               onChange={(e) => setDoublesListText(e.target.value)}
//             />
//           </Style.AddPlayersInput>
//           <Style.ButtonGroup>
//             <Style.Button
//               className="add-player"
//               style={{ backgroundColor: "#218d3a" }}
//               onClick={addDoubleList}
//             >
//               Adicionar
//             </Style.Button>
//             <Style.Button
//               className="remove-players"
//               style={{ backgroundColor: "#dc3545" }}
//               onClick={() => setDoublesListText("")}
//             >
//               Limpar
//             </Style.Button>
//           </Style.ButtonGroup>
//         </Style.Column>
//         <Style.Column>
//           <Style.Subtitle>
//             <h2>Duplas ({entries.length}):</h2>
//           </Style.Subtitle>
//           <ul className="player-list">
//             {entries.map((entry, index) => (
//               <li className="player" key={index}>
//                 <div className="player-name">{entry}</div>
//                 <RemoveCircleIcon
//                   style={{ color: "red", cursor: "pointer" }}
//                   onClick={() => removeEntry(entry)}
//                 />
//               </li>
//             ))}
//           </ul>
//           <Style.Groups>
//             <div className="groups-config">
//               <div className="groups-number">
//                 <h3>Número de grupos:</h3>
//                 <input
//                   type="number"
//                   value={groups}
//                   onChange={(e) => setGroups(Number(e.target.value))}
//                   min={1}
//                   max={entries.length}
//                 />
//               </div>
//             </div>
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             <Style.Button
//               className="groups-button"
//               onClick={sortGroups}
//               disabled={entries.length < 2}
//             >
//               Sortear Grupos
//             </Style.Button>
//           </Style.Groups>
//           {/* <h2>Grupos Sorteados</h2>
//           {groups.map((group, idx) => (
//             <div key={idx} style={{ marginBottom: "15px" }}>
//               <strong>Grupo {idx + 1}:</strong>
//               <ul>
//                 {group.map((dupla, i) => (
//                   <li key={i}>{dupla}</li>
//                 ))}
//               </ul>
//             </div>
//           ))} */}
//         </Style.Column>
//       </Style.Content>
//     </Style.Container>
//   );
// };

// export default Doubles;
