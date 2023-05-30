import "../css/style.css"
import Instagram from "../assets/icones/instagram.svg";
import Facebook from "../assets/icones/facebook.svg";
import Youtube from "../assets/icones/youtube.svg";
 
function ContatoConteudo() {


return (
<main>
    <div class="titulo-bg">
      <div class="titulo container">
        <p class="font-2-l-b cor-5">Respostas em até 24h</p>
        <h1 class="font-1-xxl cor-0">nosso contato<span class="cor-p1">.</span></h1>
      </div>
    </div>

    <div class="contato container">
      <section class="contato-dados" aria-label="Endereço">
        <h2 class="font-1-m cor-0">Loja Online</h2>
        <div class="contato-endereco font-2-s cor-4 ">
          <p>Rua Ali Perto, 35</p>
          <p>São Paulo - SP</p>
          <p>Brasil - Terra - Via Láctea</p>
        </div>
        <address class="contato-meios font-2-s cor-4">
          <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
          <a href="mailto:assistencia@bikcraft.com">assistencia@bikcraft.com</a>
          <a href="tel:+551199999999">+55 11 9999-9999</a>
        </address>
        <div class="contato-redes">
          <a href="./"><img src={Instagram} alt="instagram"/></a>
          <a href="./"><img src={Facebook} alt="facebook"/></a>
          <a href="./"><img src={Youtube} alt="youtube"/></a>
        </div>
      </section>
      <section class="contato-formulario" aria-label="Formulário">
        <form class="form" action="./contato.html">
          <div>
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Seu Nome" />
          </div>
          <div>
            <label for="telefone">Telefone</label>
            <input type="text" id="telefone" name="telefone" placeholder="(11) 9999-9999"/>
          </div>
          <div class="col-2">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="contato@email.com"/>
          </div>
          <div class="col-2">
            <label for="mensagem">Mensagem</label>
            <textarea rows="5" type="text" id="mensagem" name="mensagem" placeholder="O que você precisa?"></textarea>
          </div>
          <button class="botao col-2">Enviar Mensagem</button>
        </form>
      </section>
    </div>
  </main>
  )
}

export default ContatoConteudo;