import "../css/style.css"
import ImgSobre from "../assets/fotos/img-sobre.jpg"
import ImgSobre1 from "../assets/fotos/img-sobre1.jpg"
 
function SobreConteudo() {


return (
  <main>
    <div class="titulo-bg">
      <div class="titulo container">
        <p class="font-2-l-b cor-5">Nossa história</p>
        <h1 class="font-1-xxl cor-0">sobre nós<span class="cor-p1">.</span></h1>
      </div>
    </div>
    <div class="sobre font-2-s cor-10 container">
      <h2 class="font-1-l cor-11">Escolha a Pharmacy</h2>
      <div className="divisao-img-texto">
        <p>Há muitos motivos pelos quais você deve escolher a nossa farmácia como sua opção preferida. Nós nos orgulhamos de oferecer um atendimento personalizado e acolhedor a todos os nossos clientes. Nossos profissionais de saúde e farmacêuticos são altamente qualificados e estão sempre prontos para ouvir suas preocupações, responder às suas perguntas e fornecer aconselhamento especializado. Valorizamos a construção de relacionamentos de confiança com nossos clientes e nos esforçamos para oferecer a melhor experiência possível para todos. Valorizamos a construção de relacionamentos de confiança com nossos.</p>
        <img src={ImgSobre} alt="" />
      </div>
      <h2 class="font-1-l cor-11">Nossa Visão</h2>
      <div className="divisao-texto-img">
        <p>A Pharmacy é uma farmácia com uma visão singular e inovadora no setor farmacêutico. Sua missão é oferecer um ambiente acolhedor, acessível e centrado no cliente, onde a saúde e o bem-estar são prioridades. A visão da Pharmacy é ir além de ser apenas uma loja de medicamentos e se tornar um centro de referência para a saúde e cuidados pessoais. Nós queremos o bem para todos aqueles clientes e também que fiquem satisfeitos.</p>
        <img src={ImgSobre1} alt="mulher analisando no microscópio." className="img-1" />
        <p>Além disso, a Pharmacy tem como objetivo fornecer uma ampla gama de serviços de saúde e bem-estar, além da simples dispensação de medicamentos. Ela oferece programas de gerenciamento de doenças crônicas, como diabetes e hipertensão, onde os clientes podem receber orientações especializadas e acompanhamento regular para melhorar sua qualidade de vida. A farmácia também realiza campanhas de conscientização sobre a importância da prevenção e detecção precoce de doenças, oferecendo serviços de rastreamento e testes rápidos.</p>
      </div>
    </div>
  </main>
  )
}

export default SobreConteudo;