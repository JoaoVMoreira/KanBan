import Menu from "../../components/Menu";
import "./colaborador.scss"
import { MdFiberNew } from "react-icons/md";


function Colaboradores(){
    return(
        <>
            <div className="page">
                <Menu/>
                <div className="conteiner">
                    <div className="list-colaboradores">
                        <div className="title"><MdFiberNew/><h2>COLABORADORES</h2></div>
                        <div className="colaborador">
                            <h3>NOME COLABORADOR</h3>
                            <p>519.519.519-08</p>
                        </div>
                    </div>
                    <div className="add-colaborador">
                        <div className="title"><MdFiberNew/><h2>COLABORADORES</h2></div>
                        <div className="colab-form">
                            <label htmlFor="input">
                                <p>Nome</p>
                                <input/>
                            </label>
                            <label htmlFor="input">
                                <p>CPF</p>
                                <input/>
                            </label>
                        <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Colaboradores;