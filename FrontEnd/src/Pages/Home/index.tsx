import Menu from "../../components/Menu";
import "./home.scss"

function Home(){
    return(
        <>
            <div className="page">
                <Menu/>
                <div className="conteiner-filas">
                    <div className="fila">
                        <div className="title">
                            <h2>TO DO</h2>
                            <div className="tarefa">
                                <h3>NOME TAREFA</h3>
                                <p>nome funcionario</p>
                                <span>
                                    <p>Urgência: Regular</p>
                                    <p>!</p>
                                </span>
                            </div>
                        </div>
                        <button>+</button>
                    </div>
                    <div className="fila">
                        <div className="title">
                            <h2>DOING</h2>
                            <div className="tarefa">
                                <h3>NOME TAREFA</h3>
                                <p>nome funcionario</p>
                                <span>
                                    <p>Urgência: Regular</p>
                                    <p>!</p>
                                </span>
                            </div>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="title">
                            <h2>FINISHED</h2>
                            <div className="tarefa">
                                <h3>NOME TAREFA</h3>
                                <p>nome funcionario</p>
                                <span>
                                    <p>Urgência: Regular</p>
                                    <p>!</p>
                                </span>
                            </div>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="fila">
                        <button>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;