import { MdFiberNew, MdOutlineWorkHistory } from "react-icons/md"
import { IFilaContent, IFilaData } from "../../Interfaces/IFila"
import { BsFillPatchCheckFill, BsFillTrashFill } from "react-icons/bs"
import { ITarefaData } from "../../Interfaces/ITarefa"
import { TarefaComponent } from "../Tarefas/TarefaComponent"
import {useState} from 'react'
import DeleteFilaModal from "../Modal/DeleteFilaModal"
import { AddModalTarefa } from "../Modal/AddTarefaModal"
import { useTarefasData } from "../../Services/Tarefas/useTarefasData"

export function FilaComponent({fila}: IFilaContent){

    const { data: TarefaData } = useTarefasData();

    const[deleteFila, setDeleteFila]= useState<boolean>(false)
    const[selectedFila, setSelectedFila]= useState<IFilaData>({id: 0,nomeFila: '', projetoId:0})
    const[addTarefa, setAddTarefa] = useState<boolean>(false)

    function handleDeleteFila(item: IFilaData){
        setDeleteFila(true)
        setSelectedFila(item)
    }

    function handleCloseModal(){
        setDeleteFila(false)
        setAddTarefa(false)
    }

    function handleAddTarefa(item: IFilaData){
        setAddTarefa(true);
        setSelectedFila(item)
    }

    return(
        <>
            <title className="titulo">
                {fila.nomeFila == "Doing" ? (
                    <MdOutlineWorkHistory/>
                ): fila.nomeFila == "Finish" ? (
                        <BsFillPatchCheckFill/>
                ) : (
                    <MdFiberNew/>
                )}
                <h2>{fila.nomeFila}</h2>
                <button onClick={()=>{handleDeleteFila(fila)}}>
                    <BsFillTrashFill/>
                </button>
            </title>
            {
            TarefaData?.map((tarefa: ITarefaData)=>{
                if(tarefa.filaId.id == fila.id){
                    return(
                        <TarefaComponent tarefa={tarefa}/>
                    )
                }
            })
            }
                <button className="addTarefaBtn" onClick={() => handleAddTarefa(fila)}>+</button>
            <DeleteFilaModal isOpen={deleteFila} close={handleCloseModal} fila={selectedFila}/>
            <AddModalTarefa isOpen={addTarefa} close={handleCloseModal} fila={selectedFila}/>
        </>
    )
}