import Menu from "../../components/Menu";
import "./home.scss"
import {useState} from 'react'
import { MdFiberNew, MdOutlineWorkHistory } from "react-icons/md";
import { IFilaData } from "../../Interfaces/IFila";
import DeleteProjetoModal from "../../components/Modal/DeleteProjetoModal";
import { AddFilaModal } from "../../components/Modal/AddFilaModal";
import { BsFillPatchCheckFill, BsFillTrashFill, BsPersonWorkspace } from "react-icons/bs";
import DeleteFilaModal from "../../components/Modal/DeleteFilaModal";
import { AddModalTarefa } from "../../components/Modal/AddTarefaModal";
import {ToastContainer} from 'react-toastify'
import { useFilaData } from "../../Services/Filas/useFilasData";
import { useTarefasData } from "../../Services/Tarefas/useTarefasData";
import { ITarefaData } from "../../Interfaces/ITarefa";
import { ShowTarefaModal } from "../../components/Modal/ShowTarefaModal/ShowTarefaModal";
import { AiFillCarryOut } from "react-icons/ai";

import { TarefaComponent } from "../../components/Tarefas/TarefaComponent";
import { FilaComponent } from "../../components/Fila/FilaComponent";


function Home(){

    const { data: FilaData } = useFilaData()
    
    
    const[DeleteModal, setDeleteModal]= useState<boolean>(false)
    const[addModal, setAddModal] = useState<boolean>(false)

    function handleDeleteProjeto(){
        setDeleteModal(true)
    }
    function handleCloseModal(){
        setDeleteModal(false)
        setAddModal(false)
    }
    function handleAddModal(){
        setAddModal(true);
    }
    

    return(
        <>
            <div className="page">
                <Menu/>
                <ToastContainer/>
                <section className="conteiner-filas">
                    {!FilaData || FilaData.length === 0 ? (
                        <div className="no-content">
                            <p>Sem filas cadastradas</p>
                        </div>
                    ):(
                        <>
                            {FilaData?.map((item: IFilaData)=> {
                                return(
                                    <>
                                        {item.nomeFila == "Doing" ?(
                                            <div className="fila-doing" key={item.id}>
                                                <FilaComponent fila={item}/>
                                            </div>    
                                        ): item.nomeFila == "Finish" ? (
                                            <div className="fila-finish" key={item.id}>
                                                <FilaComponent fila={item}/>
                                            </div>
                                        ): (
                                            <div className="fila" key={item.id}>
                                                <FilaComponent fila={item}/>
                                            </div>
                                        )}
                                    </>
                                )
                            })}
                        </>
                    )}
                    <section className="new-fila">
                        <button onClick={handleAddModal}>+</button>
                        <button onClick={handleDeleteProjeto}><BsFillTrashFill/></button>
                    </section>
                </section>
            </div>
            <DeleteProjetoModal isOpen={DeleteModal} close={handleCloseModal}/>
            <AddFilaModal isOpen={addModal} close={handleCloseModal}/>
        </>
    )
}

export default Home;