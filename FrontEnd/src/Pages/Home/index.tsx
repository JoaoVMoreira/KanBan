import Menu from "../../components/Menu";
import "./home.scss"
import {useState} from 'react'
import { MdFiberNew } from "react-icons/md";
import { GetFila } from "../../Services/GetFilas";
import { IFila } from "../../Interfaces/IFila";
import DeleteProjetoModal from "../../components/Modal/DeleteProjetoModal";
import { useNavigate } from "react-router-dom";
import { AddFilaModal } from "../../components/Modal/AddFilaModal";
import { BsFillTrashFill } from "react-icons/bs";


function Home(){

    const { data } = GetFila()
    const[DeleteModal, setDeleteModal]= useState<boolean>(false)
    const[addModal, setAddModal] = useState<boolean>(false)
    const navigate = useNavigate();

    function handleDeleteProjeto(){
        setDeleteModal(true)
    }
    function handleCloseModal(){
        setDeleteModal(false)
        setAddModal(false)
        navigate(0)
    }

    function handleAddModal(){
        setAddModal(true);
    }

    return(
        <>
            <div className="page">
                <Menu/>
                <div className="conteiner-filas">
                    {
                        data?.map((item: IFila)=> {
                            return(
                                <>
                                    <div className="fila">
                                        <div className="titulo">
                                            <MdFiberNew/><h2>{item.nomeFila}</h2>
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
                                </>
                            )
                        })
                    }
                    <div className="new-fila">
                        <button onClick={handleAddModal}>+</button>
                        <button onClick={handleDeleteProjeto}><BsFillTrashFill/></button>
                    </div>
                </div>
            </div>
            <DeleteProjetoModal isOpen={DeleteModal} close={handleCloseModal}/>
            <AddFilaModal isOpen={addModal} close={handleCloseModal}/>
        </>
    )
}

export default Home;