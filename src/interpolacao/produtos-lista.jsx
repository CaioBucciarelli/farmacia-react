import "../css/style.css"
import Remedio1 from "../assets/fotos/remedio-1.jpg";
import Remedio2 from "../assets/fotos/remedio-2.jpg";
import Remedio3 from "../assets/fotos/remedio-3.jpg";
 
function ProdutosLista() {


return (
  <article className="produtos-lista">
    <h2 className="container font-1-xxl">nossos produtos.</h2>
    <ul>
      <li className="lista-item">
        <a href="/">
          <img src={Remedio1} alt=""/>
          <h3 className="font-1-xl">Remédio 1</h3>
          <span className="font-2-m cor-8">R$ 249</span>
        </a>
      </li>
      <li>
        <a href="/">
          <img src={Remedio2} alt="" />
          <h3 className="font-1-xl">Remédio 2</h3>
          <span className="font-2-m cor-8">R$ 249</span>
        </a>
      </li>
      <li>
        <a href="/">
          <img src={Remedio3} alt="" />
          <h3 className="font-1-xl">Remédio 3</h3>
          <span className="font-2-m cor-8">R$ 249</span>
        </a>
      </li>
    </ul>
  </article>
  )
}

export default ProdutosLista;