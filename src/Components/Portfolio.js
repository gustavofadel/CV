import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

          <div className="twelve columns collapsed">

              <h1>Outras Informações</h1>
              <h2>Áreas de Interesse:</h2>
              <i>Cristianismo</i><br />
              <i>Esportes</i><br />
              <i>Gastronomia</i><br />
              <i>Programação</i><br /><br />
              <h2>Cursos Relevantes:</h2>
              <i>Informática - Fundação Matias Machline (cursando)</i><br />
              <i>A Internet das Coisas - Fundamentos de IoT - Microsoft Virtual Academy</i><br />
              <i>eZAPE - Virtudes Empreendedoras</i><br /><br />
              <h2>Animais de Estimação:</h2>
              <i>Possuo dois cachorros: o Ted (<a href="https://tudosobrecachorros.com.br/daschund/" target="_blank">Daschund</a>), que possui quase 2 anos e bastante brincalhão e ativo, e o Dino (<a href="https://tudosobrecachorros.com.br/poodle-gigante-medio-anao-e-toy/" target="_blank">Poodle</a>), que já possui uns 9 anos e é mais quieto, mas quando chega uma moto...</i><br /><br />
              <h2>Times do Coração:</h2>
              <i>Os meus times de coração são o <a href="https://www.flamengo.com.br" target="_blank">Mengão</a>, o meu <a href="https://www.manutd.com" target="_blank">United</a> <strike>que tá no mesmo nível do Vasco</strike>, o meu <a href="https://www.fcbarcelona/en/" target="_blank">Barça</a> e o <a href="https://www.acmilan/en/">maior de Milão</a> <strike>que só o Pirlo salva ;-;</strike>. Eu torço para esses times por conta dos elencos que eles tinham lá em 2009-2010, que foi a época que eu comecei a me encantar pelo futebol.<br />Obs: <strong>Hoje tem gol do Gabigol.</strong></i><br /><br />
              <h2>Herói:</h2>
              <i>O herói da minha vida, sem dúvida alguma, é Jesus Cristo, pois Ele foi quem me salvou da perdição eterna e devo tudo e muito mais a Ele. Sempre me sinto grato com o amor que Ele teve por nós ao reestabelecer o nosso contato com Deus e podermos ter a salvação. Eu também tenho uma enorme admiração pelo <a href="https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw" target="_blank">Filipe Deschamps</a>, que é um baita de um programador e youtuber que atualmente mora no Canadá.</i><br /><br />
              <h2>Sonhos:</h2>
              <i>Morar em um país mais tranquilo, como a Austrália ou o Canadá, e ajudar o mundo por meio da tecnologia.</i><br /><br />
              <h2>Por que Informática?</h2>
              <i>Escolhi informática porque eu só sabia mexer no computador naquela época, e isso me atraiu para este curso. No decorrer dele acabei me apaixonando ainda mais, e agora pretendo seguir na área.</i>
            </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
