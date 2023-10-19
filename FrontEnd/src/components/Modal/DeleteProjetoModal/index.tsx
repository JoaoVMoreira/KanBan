import { IModal } from "../../../Interfaces/IModal";
import { DeleteProjeto } from "../../../Services/GetProjetos";
import '../modal.scss'

function DeleteProjetoModal({isOpen, close}:IModal){
    const { mutate, isSuccess } = DeleteProjeto()
    function deleteProjeto(){
        mutate()
        if(isSuccess){
            alert('Projeto excluido com sucesso')
            close()
        }
    }

    if(isOpen){
        return(
            <div className="backgroundStyle">
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