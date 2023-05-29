import "../css/style.css"
import imgIntroducao from "../assets/img-intro.jpg";
 
function Introducao() {

return (
    <main className="introducao-bg">
      <div className="introducao container">
        <div className="introducao-conteudo">
          <h1 className="font-1-xxl cor-0">Farmacia com remédios naturais</h1>
          <p className="font-2-l cor-5">Remédios de alta qualidade e totalmente naturais, feitos com plantas. Aproveite a vida com remédios naturais.</p>
          <a className="botao" href="/">Ver Produtos</a>
        </div>
        <picture>
          <img src={imgIntroducao} alt="Plantação Ervas" />
        </picture>
      </div>
    </main>
  )
}

export default Introducao;