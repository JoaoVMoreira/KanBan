import { BsFillPatchCheckFill, BsFillTrashFill } from "react-icons/bs";
import { IModalTarefa } from "../../../Interfaces/IModal";
import { MdFiberNew, MdOutlineWorkHistory } from "react-icons/md";
import { DeleteTarefaModal } from "../DeleteTarefaModal";
import {useState} from 'react'
import '../modal.scss'
import { BiSkipNext } from "react-icons/bi";
import { TarefaModal } from "./TarefaModal";


export function ShowTarefaModal({isOpen, close, tarefa}: IModalTarefa){
    const [deleteTarefa, setDeleteTarefa] = useState(false)
    
    function handleDeleteTarefa(){
        setDeleteTarefa(true)
    }
    function closeModal(){
        setDeleteTarefa(false)
        close()
    }

    if(isOpen){
        return(
            <div className="backgroundStyle">
                {tarefa.filaId.nomeFila == "Doing" ? (
                    <div className="content-tarefa-doing">
                        <TarefaModal tarefa={tarefa}/>
                        <div className="buttons">
                                <button ><BiSkipNext/></button>
                                <button onClick={handleDeleteTarefa}><BsFillTrashFill/></button>
                                <button onClick={close}>x</button>
                        </div>
                    </div>
                ) : tarefa.filaId.nomeFila == "Finish" ? (
                    <div className="content-tarefa-finish">
                        <TarefaModal tarefa={tarefa}/>
                        <div className="buttons">
                                <button ><BiSkipNext/></button>
                                <button onClick={handleDeleteTarefa}><BsFillTrashFill/></button>
                                <button onClick={close}>x</button>
                        </div>
                    </div>
                ): (
                    <div className="content-tarefa">
                        <TarefaModal tarefa={tarefa}/>
                        <div className="buttons">
                                <button ><BiSkipNext/></button>
                                <button onClick={handleDeleteTarefa}><BsFillTrashFill/></button>
                                <button onClick={close}>x</button>
                        </div>
                    </div>
                )}
                <DeleteTarefaModal isOpen={deleteTarefa} close={closeModal} tarefa={tarefa}/>
            </div>
        )
    }
}