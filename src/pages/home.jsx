import "../css/style.css"
import Header from "../interpolacao/header"
import Introducao from "../interpolacao/introducao"
import ProdutosLista from "../interpolacao/produtos-lista"

function Home(){

    return(
        <div>
            <Header/>
            <Introducao/>
            <ProdutosLista/>
        </div>
    )

}

export default Home;