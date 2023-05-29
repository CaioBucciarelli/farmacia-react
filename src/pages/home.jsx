import "../css/style.css"
import Header from "../interpolacao/header"
import Introducao from "../interpolacao/introducao"
import ProdutosLista from "../interpolacao/produtos-lista"
import Footer from "../interpolacao/footer"

function Home(){

    return(
        <div>
            <Header/>
            <Introducao/>
            <ProdutosLista/>
            <Footer/>
        </div>
    )

}

export default Home;