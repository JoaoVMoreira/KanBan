import Menu from "../../components/Menu";
import "./home.scss"
import {useState, useEffect} from 'react'
import { IFilaData } from "../../Interfaces/IFila";
import DeleteProjetoModal from "../../components/Modal/DeleteProjetoModal";
import { AddFilaModal } from "../../components/Modal/AddFilaModal";
import { BsFillTrashFill } from "react-icons/bs";
import {ToastContainer} from 'react-toastify'
import { useFilaData } from "../../Services/Filas/useFilasData";
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
                {!FilaData || FilaData.length === 0 ? (
                    <section className="conteiner-filas">
                        <div className="no-content">
                            <p>Sem filas cadastradas</p>
                        </div>
                    </section>
                ):(
                    <section key={FilaData.id} className="conteiner-filas">
                        {FilaData?.map((item: IFilaData)=> {
                            return(
                                <div key={item.id}>
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
                                </div>
                            )
                        })}
                    </section>
                )}
                <section className="new-fila">
                    <button onClick={handleAddModal}>+</button>
                    <button onClick={handleDeleteProjeto}><BsFillTrashFill/></button>
                </section>
            </div>
            <DeleteProjetoModal isOpen={DeleteModal} close={handleCloseModal}/>
            <AddFilaModal isOpen={addModal} close={handleCloseModal}/>
        </>
    )
}

export default Home;