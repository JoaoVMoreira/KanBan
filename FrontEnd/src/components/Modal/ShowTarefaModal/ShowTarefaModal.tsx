import { BsFillTrashFill } from "react-icons/bs";
import { IModalTarefa } from "../../../Interfaces/IModal";
import { DeleteTarefaModal } from "../DeleteTarefaModal";
import {useState} from 'react'
import '../modal.scss'
import { BiSkipNext } from "react-icons/bi";
import { TarefaModal } from "./TarefaModal";
import { IButtonsControler, ITarefaData } from "../../../Interfaces/ITarefa";
import { AlterFila } from "../AlterFila/AlterFila";

function ButtonsControl({moverTarefa, deletarTarefa, close}:IButtonsControler){
    return(
        <div className="buttons">
            <button onClick={moverTarefa}><BiSkipNext/></button>
            <button onClick={deletarTarefa}><BsFillTrashFill/></button>
            <button onClick={close}>x</button>
        </div>
    )
}


export function ShowTarefaModal({isOpen, close, tarefa}: IModalTarefa){

    const dataColaborador:ITarefaData = {
        id: 0,
        nomeTarefa: "", 
        colaboradorId: {
            cpf: "",
            id: 0,
            nome: ""
        },
        dataLimite: new Date,
        urgencia: "",
        descricao: "",
        filaId: {
            id: 0,
            nomeFila: '',
            projetoId: 0
        }
    }

    const [deleteTarefa, setDeleteTarefa] = useState(false)
    const [alterFila, setAlterFila] = useState<boolean>(false)
    const [selectedTarefa, setSelectedTarefa] = useState<ITarefaData>(dataColaborador)

    function handleDeleteTarefa(){
        setDeleteTarefa(true)
    }
    function closeModal(){
        setDeleteTarefa(false)
        setAlterFila(false)
        close()
    }
    function handleMoveTarefa(tarefa: ITarefaData){
        setAlterFila(true)
        setSelectedTarefa(tarefa)
    }

    if(isOpen){
        return(
            <div className="backgroundStyle">
                {tarefa.filaId.nomeFila == "Doing" ? (
                    <div className="content-tarefa-doing">
                        <TarefaModal tarefa={tarefa}/>
                        <ButtonsControl moverTarefa={()=>{handleMoveTarefa(tarefa)}} deletarTarefa={handleDeleteTarefa} close={close}/>
                    </div>
                ) : tarefa.filaId.nomeFila == "Finish" ? (
                    <div className="content-tarefa-finish">
                        <TarefaModal tarefa={tarefa}/>
                        <ButtonsControl moverTarefa={()=>{handleMoveTarefa(tarefa)}} deletarTarefa={handleDeleteTarefa} close={close}/>
                    </div>
                ): (
                    <div className="content-tarefa">
                        <TarefaModal tarefa={tarefa}/>
                        <ButtonsControl moverTarefa={()=>{handleMoveTarefa(tarefa)}} deletarTarefa={handleDeleteTarefa} close={close}/>
                    </div>
                )}
                <DeleteTarefaModal isOpen={deleteTarefa} close={closeModal} tarefa={tarefa}/>
                <AlterFila isOpen={alterFila} close={closeModal} tarefa={selectedTarefa}/>
            </div>
        )
    }
}