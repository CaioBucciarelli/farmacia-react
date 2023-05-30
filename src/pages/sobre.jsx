import "../css/style.css"
import Header from "../interpolacao/header"
import Footer from "../interpolacao/footer"
import SobreConteudo from "../interpolacao/sobre-conteudo"

function Sobre(){

    return(
        <div>
            <Header/>
            <SobreConteudo/>
            <Footer/>
        </div>
    )

}

export default Sobre