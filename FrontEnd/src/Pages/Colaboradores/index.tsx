import Menu from "../../components/Menu";
import "./colaborador.scss"

function Colaboradores(){
    return(
        <>
            <div className="page">
                <Menu/>
                <div className="conteiner">
                    <div className="list-colaboradores">
                        <div><h2>COLABORADORES</h2></div>
                        <div>
                            <h2>NOME COLABORADOR</h2>
                            <p>519.519.519-08</p>
                        </div>
                    </div>
                    <div className="add-colaborador">
                        <h2>NOVO COLABORADOR</h2>
                        <div className="colab-form">
                            <label htmlFor="input">
                                <p>Nome</p>
                                <input/>
                            </label>
                            <label htmlFor="input">
                                <p>CPF</p>
                                <input/>
                            </label>
                        </div>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Colaboradores;