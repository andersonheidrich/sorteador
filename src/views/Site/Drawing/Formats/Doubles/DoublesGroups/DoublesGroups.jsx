import { useLocation } from "react-router-dom";
import * as Style from "./styles";

const DoublesGroups = () => {
  const location = useLocation();
  const { rounds } = location.state || {};

  return (
    <Style.Container>
      <Style.Title>
        <h1>Formato de Duplas</h1>
      </Style.Title>
      <Style.Content>
        <Style.Column>
          <Style.Subtitle>
            <h2>Grupos:</h2>
          </Style.Subtitle>
          <Style.Groups>
            {rounds.map((groupRounds, groupIdx) => (
              <div key={groupIdx} className="group">
                <h2>Grupo {groupIdx + 1}:</h2>
                {groupRounds.map((round, idx) => (
                  <div className="rounds" key={idx}>
                    <h4>Rodada {idx + 1}:</h4>
                    {round.map((quadra, i) => (
                      <div className="round" key={i}>
                        <p>
                          {quadra.dupla1.join(" / ")} vs{" "}
                          {quadra.dupla2.join(" / ")}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </Style.Groups>
        </Style.Column>
      </Style.Content>
    </Style.Container>
  );
};

export default DoublesGroups;
