import "./ColunaMaior.css";
import cubosflix from "../../assets/images/cubosflix.jpg";
import marketCubos from "../../assets/images/market-cubos.jpg";

export default function ColunaMaior() {
  return (
    <div className="coluna_maior">
      <h2>Habilidades</h2>
      <div className="habilidades">
        <div className="habilidade">
          <h3>Front</h3>
          <ul>
            {/* HTML */}
            <li>
              <p className="nome">HTML</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* CSS */}
            <li>
              <p className="nome">CSS</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* JS */}
            <li>
              <p className="nome">Java Script</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* React */}
            <li>
              <p className="nome">React</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="habilidade">
          <h3>Back</h3>
          <ul>
            {/* Node */}
            <li>
              <p className="nome">Node.js</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* PostgresSQL */}
            <li>
              <p className="nome">PostgresSQL</p>
              <div className="progresso">
                <div className="barra "></div>
                <div className="barra "></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* PHP */}
            <li>
              <p className="nome">PHP</p>
              <div className="progresso">
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* mySQL */}
            <li>
              <p className="nome">mySQL</p>
              <div className="progresso">
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="habilidade">
          <h3>Soft skills</h3>
          <ul>
            <li>
              <p className="nome">Comunicação</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>

            <li>
              <p className="nome">Trabalho em equipe</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>

            <li>
              <p className="nome">Gerenciamento de tempo</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>

            <li>
              <p className="nome">Gestão de conflitos</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="tituloprojetos">Projetos</h2>
      <div className="projetos">
        <div className="projeto">
          <h3>Market Cubos</h3>
          <p>
            Projeto final do módulo 3 do curso Programação do Zero da Cubos
            Academy. No front-end foi utilizado React com as bibliotecas
            react-hook-form, react-router-dom, react-use e material-ui. No
            back-end foi utilizado o Node com as bibliotecas express, bcrypt,
            json-webtoken, cors, dotenv e pg. O banco de dados foi o PostgreSQL.
          </p>
          <a
            className="github"
            href="https://github.com/Trettin/Market-Cubos-Desafio03-front"
            target="_blank"
            rel="noreferrer"
          >
            Ver no Github: Front-end
          </a>
          <a
            className="github"
            href="https://github.com/Trettin/Market-Cubos-Desafio3-Back"
            target="_blank"
            rel="noreferrer"
          >
            Ver no Github: Back-end
          </a>
          <img src={marketCubos} alt="imagem do site market-cubos" />
          <a
            className="link_button"
            href="https://market-cubos.trettin.dev.br/"
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto
          </a>
        </div>

        <div className="projeto">
          <h3>Cubos Flix</h3>
          <p>
            Cubos Flix é um site fictício desenvolvido ao final do segundo
            módulo do curso Programação do Zero da Cubos Academy. Site
            desenvolvido com React utilizando conceitos de componentização,
            hooks useState e useEffect, armazenamento de informações em
            localStorage.
          </p>
          <a
            className="github"
            href="https://github.com/Trettin/cubos-flix"
            target="_blank"
            rel="noreferrer"
          >
            Ver no Github
          </a>
          <img src={cubosflix} alt="imagem do site cubosflix" />
          <a
            className="link_button"
            href="https://trettin-cubos-flix.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto
          </a>
        </div>

        {/* <div className="projeto">
                    <h3>Casa Criativa</h3>
                    <p>
                        Casa criativa é um site para se catalogar ideias com intuito de
                        tornar o período de isolamento social, devido ao Covid19, mais
                        interessante. <br />
                        Projeto desenvolvio no WorkshopDev Especial da Rocketseat.
                    </p>
                    <img src="https://i.imgur.com/bUt3lLe.jpg" alt="imagem casa criativa"/>
                    <a href="https://criativacasa.netlify.app/" target="_blank" rel='noreferrer'>Ver projeto</a>
                </div> */}
      </div>
    </div>
  );
}
