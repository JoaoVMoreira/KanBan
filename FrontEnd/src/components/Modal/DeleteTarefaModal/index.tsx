import { IModalTarefa } from "../../../Interfaces/IModal";
import useTarefasDelete from "../../../Services/Tarefas/useTarefasDelete";
import { toast} from 'react-toastify'


export function DeleteTarefaModal({isOpen, close, tarefa}: IModalTarefa){
    const { mutate } = useTarefasDelete()
    const deleteTarefa = (evento:any)=>{
        evento.preventDefault()
        try{
            mutate(tarefa.id)
            toast.success("Colaborador cadastrado com sucesso")
            close()
        }catch(error){
            
        }   
    }

    if(isOpen){
        return(
            <div className="backgroundStyle">
                <div className="deleteConteiner">
                <p>Tem certeza que deseja deletar o a fila <span>{tarefa.nomeTarefa}</span>?</p>
                    <div className="buttons-delete-tarefa">
                        <button onClick={deleteTarefa}>SIM</button>
                        <button onClick={close}>CANCELAR</button>
                    </div>
                </div>
            </div>
        )
    }
}