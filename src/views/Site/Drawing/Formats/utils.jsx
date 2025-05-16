import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const alreadyPlayedTogether = (history, p1, p2) => {
  return history.some((pair) => pair.includes(p1) && pair.includes(p2));
};

export const generateAmericanFormatRounds = (players, numRounds) => {
  const rounds = [];
  const partnerHistory = [];

  for (let r = 0; r < numRounds; r++) {
    let attempts = 0;
    let maxAttempts = 100;
    let round = [];
    let shuffled = shuffleArray(players);

    while (shuffled.length >= 4 && attempts < maxAttempts) {
      const group = shuffled.slice(0, 4);

      const validPairings = [
        [
          [0, 1],
          [2, 3],
        ],
        [
          [0, 2],
          [1, 3],
        ],
        [
          [0, 3],
          [1, 2],
        ],
      ];

      let chosen = null;
      for (let pair of validPairings) {
        const [a1, a2] = pair[0];
        const [b1, b2] = pair[1];

        if (
          !alreadyPlayedTogether(partnerHistory, group[a1], group[a2]) &&
          !alreadyPlayedTogether(partnerHistory, group[b1], group[b2])
        ) {
          chosen = {
            dupla1: [group[a1], group[a2]],
            dupla2: [group[b1], group[b2]],
          };
          partnerHistory.push([group[a1], group[a2]]);
          partnerHistory.push([group[b1], group[b2]]);
          break;
        }
      }

      if (chosen) {
        round.push(chosen);
        shuffled.splice(0, 4);
      } else {
        shuffled = shuffleArray(shuffled);
        attempts++;
      }
    }

    rounds.push(round);
  }

  return rounds;
};

// export const generateIndividualMatchRounds = (players) => {
//   const groups = [];
//   const shuffled = shuffleArray(players.slice());

//   // Agrupar jogadores de 3 em 3
//   for (let i = 0; i < shuffled.length; i += 3) {
//     const group = shuffled.slice(i, i + 3);

//     // Verificação extra (opcional, já garantido pelo slice)
//     if (group.length > 3) {
//       throw new Error("Grupo com mais de 3 jogadores detectado.");
//     }

//     groups.push(group);
//   }

//   // Para cada grupo, gerar 3 rodadas (máximo de 1 confronto por rodada)
//   const allRounds = [[], [], []]; // rodada 1, 2, 3

//   groups.forEach((group) => {
//     if (group.length === 3) {
//       allRounds[0].push([group[0], group[1]]);
//       allRounds[1].push([group[0], group[2]]);
//       allRounds[2].push([group[1], group[2]]);
//     } else if (group.length === 2) {
//       allRounds[0].push([group[0], group[1]]);
//     } else if (group.length === 1) {
//       allRounds[0].push([group[0], null]);
//     }
//   });

//   return allRounds;
// };

export const groupPlayers = (players, numGroups) => {
  const shuffled = [...players].sort(() => 0.5 - Math.random());
  const groups = Array.from({ length: numGroups }, () => []);
  shuffled.forEach((player, index) => {
    groups[index % numGroups].push(player);
  });
  return groups;
};

export const generateXLSX = (rounds) => {
  const workbook = XLSX.utils.book_new();

  rounds.forEach((groupRounds, groupIdx) => {
    const data = [];

    groupRounds.forEach((rodada, rodadaIdx) => {
      data.push([`Rodada ${rodadaIdx + 1}`]);
      data.push(["Dupla 1", "Dupla 2"]);

      rodada.forEach((quadra) => {
        data.push([quadra.dupla1.join(" & "), quadra.dupla2.join(" & ")]);
      });

      data.push([]);
    });

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, `Grupo ${groupIdx + 1}`);
  });

  const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([wbout], { type: "application/octet-stream" });
  saveAs(blob, "sorteio.xlsx");
};

export const generatePDF = (rounds) => {
  const doc = new jsPDF();

  rounds.forEach((groupRounds, groupIdx) => {
    doc.setFontSize(16);
    doc.text(`Grupo ${groupIdx + 1}`, 10, 10 + groupIdx * 80);

    let y = 20 + groupIdx * 80;

    groupRounds.forEach((rodada, rodadaIdx) => {
      doc.setFontSize(12);
      doc.text(`Rodada ${rodadaIdx + 1}:`, 10, y);
      y += 6;

      rodada.forEach((quadra) => {
        const line = `${quadra.dupla1.join(" & ")} vs ${quadra.dupla2.join(
          " & "
        )}`;
        doc.text(line, 15, y);
        y += 6;
      });

      y += 4;
      if (y > 270) {
        doc.addPage();
        y = 10;
      }
    });
  });

  doc.save("sorteio.pdf");
};
