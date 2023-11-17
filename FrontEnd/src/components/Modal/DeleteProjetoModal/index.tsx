import { IModal } from "../../../Interfaces/IModal";
import { useProjetosDelete } from "../../../Services/Projetos/useProjetosDelete";
import '../modal.scss'
import { ToastContainer, toast} from 'react-toastify';


function DeleteProjetoModal({isOpen, close}:IModal){
    const { mutate, isSuccess } = useProjetosDelete()
    function deleteProjeto(evento: any){
        evento.preventDefault()
        mutate()
        if(isSuccess){
            toast.success("Projeto excluido com sucesso!")
            localStorage.setItem("projetoId", "0")
            close()
        }
    }

    if(isOpen){
        return(
            <div className="backgroundStyle">
                <ToastContainer/>
                <div className="deleteConteiner">
                    <p>Tem certeza que deseja deletar este projeto e todas as suas tarefas?</p>
                    <div className="buttons-delete">
                        <button onClick={deleteProjeto}>SIM</button>
                        <button onClick={close}>CANCELAR</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteProjetoModal;