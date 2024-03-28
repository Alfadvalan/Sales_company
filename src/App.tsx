import Xarrow from 'react-xarrows';
import { logo, arrow } from './assets/images';
import './App.css';

function App() {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const buttonClick = () => {
    window.location.href = ('https://form.respondi.app/FTw4wTc1')
  };
 
  return (
   <div>
    <main>
      <div className="main-div">
        <div className="main-logo">
          <img src={logo} alt="" />
        </div>
        <div className="main-text">
          <p className='primeroTexto'>MAIS QUE UMA ASSESSORIA EM MARKETING</p>
          <h1>
          ASSESSORIA FOCADA EM MARKETING PARA PROTEÇÃO <span id ="protecao"> VEICULAR</span>
          </h1>
          <p>
            Somos seu parceiro estratégico na jornada para o sucesso. Nossa abordagem focada em resultados não é apenas sobre criar uma presença digital notável; é sobre transformar cliques em clientes satisfeitos.
          </p>
        </div>
        <div className="button main-button">
          <button onClick={buttonClick}>EU QUERO TER MAIS ADESÕES!</button>
        </div>
        <div className="main-scroll">
          <img src={arrow} alt="" onClick={scrollToBottom} />
        </div>
      </div>
    </main>
    <section className="second">
      <div className="second-title">
        <h2>CONHEÇA O O.P.W.P</h2>
        <p>NOSSOS PROGRAMAS DE MARKETING</p>
      </div>
      <div className="box-wrapper">
          <div className="box-left left-right-line left-1" >
            <div className="box-left-text"  >
              <h2>sales <span>on</span></h2>
              <p>Nossa solução de gerenciamento de redes sociais. Vamos além da simples gestão; criamos conteúdo envolvente, aumentamos o engajamento e posicionamos sua marca como líder no cenário digital.</p>
            </div>     
          </div>
          <div className="box-right right-top-line right-left-line" id='right-1' >
            <div className="box-right-text"  >
              <h2>sales <span>pulse</span></h2>
              <p>É  o ritmo acelerado dos seus anúncios online. Não lançamos apenas anúncios; orquestramos uma sinfonia digital que ressoa com seu público-alvo. Das estratégias de segmentação à análise de desempenho, garantimos que cada anúncio seja uma nota perfeita para o crescimento do seu negócio.</p>
            </div>     
          </div>
          <div className="box-left left-top-line left-right-line" id='left-2' >
            <div className="box-left-text"  >
              <h2>sales <span>web</span></h2>
              <p>Nossa solução para sites e landing pages. É sobre dar vida à sua presença digital. Desde a concepção até a otimização contínua, garantimos que sua presença online seja uma poderosa extensão do seu negócio, capturando a essência da sua marca e convertendo visitantes em clientes satisfeitos.</p>
            </div>     
          </div>
          <div className="box-right right-top-line" id='right-2' >
            <div className="box-right-text"  >
              <h2>sales <span>performance</span></h2>
              <p>Nosso programa dedicado à alavancagem comercial. Não é apenas um programa; é um catalisador para o seu sucesso comercial. Com estratégias personalizadas, treinamento eficaz e um olhar atento às tendências do mercado, estamos comprometidos em impulsionar sua empresa para novas alturas.</p>
            </div>     
          </div>
        </div>
      <div className="button second-button">
        <button onClick={buttonClick}>eu quero vender mais</button>
      </div>
    </section>
    <section className="last">
      <div className="last-title">
        <h2>você sofre com algum desses problemas?</h2>
      </div>
      <div className="last-box-container">
        <div className="box-out">
          <div className="box-in">
            <h3>Adesões <br />estagnada</h3>
          </div>
        </div>
        <div className="box-out">
          <div className="box-in">
            <h3>Concorrência na sua frente</h3>
          </div>
        </div>
        <div className="box-out">
          <div className="box-in">
            <h3>Marca não conhecida</h3>
          </div>
        </div>
        <div className="box-out">
          <div className="box-in">
            <h3>Associados desinteressados</h3>
          </div>
        </div>
      </div>
      <div className="last-text">
        <p>Com a nossa Assessoria em Marketing, somos a resposta para os desafios empresariais comuns.</p>
        <p>Seja a receita estagnada, a concorrência acirrada, a falta de reconhecimento da marca ou clientes desinteressados, resolvemos esses problemas com o nosso método de vendas.</p>
        <p>Nossa abordagem estratégica e personalizada visa transformar desafios em oportunidades, impulsionando o crescimento da sua empresa.</p>
      </div>
      <div className="big-out">
        <div className="big-in">
          <h3>Hoje você pode receber nossa assessoria completa de marketing</h3>
          <p>PELO PREÇO DE UM ÚNICO FUNCIONÁRIO!</p>
          <div className="button last-button">
            <button onClick={buttonClick}>EU QUERO TER MAIS ADESÕES!</button>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <img src={logo} alt="" />
      <p>{(new Date().getFullYear())} - Todos os direitos reservados©</p>
    </footer>
   </div>
  );
}

export default App;