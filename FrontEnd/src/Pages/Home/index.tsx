import Menu from "../../components/Menu";
import "./home.scss"
import {useState} from 'react'
import { MdFiberNew } from "react-icons/md";
import { IFilas } from "../../Interfaces/IFila";
import DeleteProjetoModal from "../../components/Modal/DeleteProjetoModal";
import { AddFilaModal } from "../../components/Modal/AddFilaModal";
import { BsFillTrashFill } from "react-icons/bs";
import DeleteFilaModal from "../../components/Modal/DeleteFilaModal";
import { AddModalTarefa } from "../../components/Modal/AddTarefaModal";
import {ToastContainer} from 'react-toastify'
import { useFilaData } from "../../Services/Filas/useFilasData";


function Home(){

    const { data } = useFilaData()
    
    const[DeleteModal, setDeleteModal]= useState<boolean>(false)
    const[deleteFila, setDeleteFila]= useState<boolean>(false)
    const[addTarefa, setAddTarefa] = useState<boolean>(false)
    const[selectedFila, setSelectedFila]= useState<IFilas>({id: 0,nomeFila: '', projetoId:0})
    const[addModal, setAddModal] = useState<boolean>(false)

    function handleDeleteProjeto(){
        setDeleteModal(true)
    }
    function handleCloseModal(){
        setDeleteModal(false)
        setAddModal(false)
        setDeleteFila(false)
        setAddTarefa(false)
    }
    function handleAddModal(){
        setAddModal(true);
    }
    function handleAddTarefa(item: IFilas){
        setAddTarefa(true);
        setSelectedFila(item)
    }
    function handleDeleteFila(item: IFilas){
        setDeleteFila(true)
        setSelectedFila(item)
    }

    return(
        <>
            <div className="page">
                <Menu/>
                <ToastContainer/>
                <section className="conteiner-filas">
                    {!data || data.length === 0 ? (
                        <div className="no-content">
                            <p>Sem filas cadastradas</p>
                        </div>
                    ): (
                        <>
                            {
                        data?.map((item: IFilas)=> {
                        return(
                            <>
                                <div className="fila" key={item.id}>
                                    <title className="titulo">
                                        <MdFiberNew/>
                                        <h2>{item.nomeFila}</h2>
                                        <button onClick={()=>{handleDeleteFila(item)}}>
                                            <BsFillTrashFill/>
                                        </button>
                                    </title>
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
                                        <button onClick={() => handleAddTarefa(item)}>+</button>
                                    </div>
                            </>
                        )
                    })
                    }
                        </>
                    )}
                    
                    <section className="new-fila">
                        <button onClick={handleAddModal}>+</button>
                        <button onClick={handleDeleteProjeto}><BsFillTrashFill/></button>
                    </section>
                </section>
            </div>
            <AddModalTarefa isOpen={addTarefa} close={handleCloseModal} fila={selectedFila}/>
            <DeleteProjetoModal isOpen={DeleteModal} close={handleCloseModal}/>
            <AddFilaModal isOpen={addModal} close={handleCloseModal}/>
            <DeleteFilaModal isOpen={deleteFila} close={handleCloseModal} fila={selectedFila}/>
        </>
    )
}

export default Home;