import * as Style from "./Main.styles";

const Main = () => {
  return (
    <Style.Container>
      <Style.Title>
        <h1>Sorteador Online</h1>
      </Style.Title>
      <Style.Content>
        <Style.Text>
          <li>Realize sorteios.</li>
          <li>
            Crie e gerencie seus torneios de beach tennis e padel de forma
            rápida e fácil.
          </li>
          <li>
            Faça download dos grupos e tabelas de jogos em arquivos nos formatos
            PDF e XLSX.
          </li>
        </Style.Text>
      </Style.Content>
    </Style.Container>
  );
};

export default Main;
