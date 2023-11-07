import { ITarefaContent, ITarefaData } from "../../Interfaces/ITarefa";
import {useState} from 'react'
import { ShowTarefaModal } from "../Modal/ShowTarefaModal/ShowTarefaModal";

export function TarefaComponent({tarefa}: ITarefaContent){

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
    const[showTarefa, setShowTarefa] = useState<ITarefaData>(dataColaborador)
    const[tarefaModal, setTarefaModal] = useState(false)

    function handleShowTarefa(tarefa: ITarefaData){
        setShowTarefa(tarefa)
        setTarefaModal(true)
    }
    function handleCloseModal(){
        setTarefaModal(false)
    }

    return(
        <>
            <div className="tarefa" onClick={()=>{handleShowTarefa(tarefa)}}>
                <h3>{tarefa.nomeTarefa}</h3>
                <p>{tarefa.colaboradorId.nome}</p>
                <span>
                    <p>Urgência: {tarefa.urgencia}</p>
                </span>
            </div>
        
            <ShowTarefaModal isOpen={tarefaModal} close={handleCloseModal} tarefa={showTarefa}/>
        </>
        
    )
}