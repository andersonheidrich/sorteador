import * as Style from "./Main.styles";

const Main = () => {
  return (
    <Style.Container>
      <Style.Title>
        <h1>Escolha um dos formatos acima</h1>
      </Style.Title>
      <Style.Content>
        <Style.Column>
          <Style.Subtitle>
            <h2>Americano</h2>
          </Style.Subtitle>
          <Style.Text>
            <li>Cada jogador participa de várias partidas.</li>
            <li>
              A cada rodada, os parceiros e/ou adversários são trocados de forma
              que todos joguem com e contra todos os membros do grupo.
            </li>
            <li>
              Pontuação: A pontuação vai para o jogador individualmente, não
              para a dupla.
            </li>
            <li>
              Por exemplo, se uma dupla vence por 6 a 4, cada jogador da dupla
              vencedora ganha 6 pontos, e os perdedores ganham 4.
            </li>
            <li>
              Duração fixa ou por número de rodadas: As partidas podem ter tempo
              cronometrado (ex: 15 minutos por jogo) ou ser jogadas até
              determinado número de games (ex: até 6 games).
            </li>
            <li>
              O número de rodadas depende do número de jogadores inscritos.
            </li>
            <li>
              Classificação final: Ao fim de todas as rodadas, os pontos de cada
              jogador são somados. Quem tiver o maior número vitórias e games
              ganhos é o vencedor.
            </li>
            <li>
              Desempate: Se houver empate em pontos, os critérios de desempate
              podem incluir:
              <ol>
                <li>Confronto direto (se aplicável)</li>
                <li>Diferença de games (games ganhos - games perdidos)</li>
                <li>Sorteio (em casos raros)</li>
              </ol>
            </li>
          </Style.Text>
        </Style.Column>
        <Style.Column>
          <Style.Subtitle>
            <h2>Duplas</h2>
          </Style.Subtitle>
          <Style.Text>
            <li>Pode ser com dupla fixa ou sorteada na hora.</li>
            <li>
              A cada rodada, as duplas se enfrentam até que todas tenham jogado
              contra todas dentro do grupo.
            </li>
            <li>Pontuação: As duplas pontuam conforme seus resultados.</li>
            <li>
              Por exemplo, se uma dupla vence por 6 a 4, a dupla vencedora ganha
              6 pontos, e a perdedora ganha 4.
            </li>
            <li>
              Duração fixa ou por número de rodadas: As partidas podem ter tempo
              cronometrado (ex.: 15 minutos por jogo) ou ser jogadas até
              determinado número de games (ex.: até 6 games).
            </li>
            <li>O número de rodadas depende do número de duplas inscritas.</li>
            <li>
              Classificação final: Ao fim de todas as rodadas, os pontos de cada
              dupla são somados. As duplas que tiverem o maior número de
              vitórias e games ganhos avançam de fase.
            </li>
            <li>
              Desempate: Se houver empate em pontos, os critérios de desempate
              podem incluir:
              <ol>
                <li>Confronto direto (se aplicável)</li>
                <li>Diferença de games (games ganhos - games perdidos)</li>
                <li>Sorteio (em casos raros)</li>
              </ol>
            </li>
          </Style.Text>
        </Style.Column>
        <Style.Column>
          <Style.Subtitle>
            <h2>Simples</h2>
          </Style.Subtitle>
          <Style.Text>
            <li>Cada jogador participa de várias partidas.</li>
            <li>
              A cada rodada, o adversário é trocado de forma que todos joguem
              contra todos os membros do grupo.
            </li>
            <li>Pontuação: A pontuação vai para o jogador individualmente.</li>
            <li>
              Por exemplo, se um jogador vence por 6 a 4, ele ganha 6 pontos, e
              o perdedor ganha 4.
            </li>
            <li>
              Duração fixa ou por número de rodadas: As partidas podem ter tempo
              cronometrado (ex: 15 minutos por jogo) ou ser jogadas até
              determinado número de games (ex: até 6 games).
            </li>
            <li>
              O número de rodadas depende do número de jogadores inscritos.
            </li>
            <li>
              Classificação final: Ao fim de todas as rodadas, os pontos de cada
              jogador são somados. Quem tiver o maior número vitórias e games
              ganhos é o vencedor.
            </li>
            <li>
              Desempate: Se houver empate em pontos, os critérios de desempate
              podem incluir:
              <ol>
                <li>Confronto direto (se aplicável)</li>
                <li>Diferença de games (games ganhos - games perdidos)</li>
                <li>Sorteio (em casos raros)</li>
              </ol>
            </li>
          </Style.Text>
        </Style.Column>
      </Style.Content>
    </Style.Container>
  );
};

export default Main;
