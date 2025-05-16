// import { useLocation } from "react-router-dom";
// import * as Style from "./styles";
// import { generatePDF, generateXLSX } from "../../utils";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";

// const SingleGroups = () => {
//   const location = useLocation();
//   const { rounds, players } = location.state || {};

//   return (
//     <Style.Container>
//       <Style.Title>
//         <h1>Formato Simples</h1>
//       </Style.Title>
//       <Style.Content>
//         <Style.Column>
//           <Style.Subtitle>
//             <h2>Grupos:</h2>
//           </Style.Subtitle>
//           <Style.Groups>
//             {rounds.map((groupRounds, groupIdx) => (
//               <div key={groupIdx} className="group">
//                 <h2>Grupo {groupIdx + 1}</h2>
//                 {groupRounds.map((round, idx) => (
//                   <div className="rounds" key={idx}>
//                     <h4>Rodada {idx + 1}:</h4>
//                     {round.map((match, matchIdx) => (
//                       <div className="round" key={matchIdx}>
//                         <p>
//                           {match[0]} vs {match[1]}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </Style.Groups>
//           {rounds.length > 0 && (
//             <Style.Download>
//               <div className="file">
//                 <span>Baixar PDF</span>
//                 <FileDownloadIcon
//                   style={{ cursor: "pointer" }}
//                   onClick={() => generatePDF(rounds)}
//                 />
//               </div>
//               <div className="file">
//                 <span>Baixar XLSX</span>
//                 <FileDownloadIcon
//                   style={{ cursor: "pointer" }}
//                   onClick={() => generateXLSX(rounds)}
//                 />
//               </div>
//             </Style.Download>
//           )}
//         </Style.Column>
//       </Style.Content>
//     </Style.Container>
//   );
// };

// export default SingleGroups;
