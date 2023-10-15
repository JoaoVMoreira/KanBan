import Menu from "../../components/Menu";
import "./home.scss"
import { MdFiberNew } from "react-icons/md";

function Home(){
    return(
        <>
            <div className="page">
                <Menu/>
                <div className="conteiner-filas">
                    <div className="fila">
                        <div className="titulo">
                            <MdFiberNew/><h2>TO DO</h2>
                        </div>
                            <div className="tarefa">
                                <h3>NOME TAREFA</h3>
                                <p>nome funcionario</p>
                                <span>
                                    <span>
                                        <p>Urgência: Regular</p>
                                        <p className="danger">!</p>
                                    </span>
                                    
                                </span>
                            </div>
                            
                        <button>+</button>
                    </div>
                    <div className="new-fila">
                        <button>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;