import { IModalColaborador } from "../../../Interfaces/IModal";
import { DeleteColaboradores } from "../../../Services/GetColaboradores";
import '../modal.scss'

function DeleteColaboradorModal({isOpen, close, colaborador}:IModalColaborador){
    const { mutate, isSuccess } = DeleteColaboradores();
    function handleDeleteColaborador(){
        mutate(colaborador.id)
        if(isSuccess){
            alert('Colaborador excluido com sucesso!')
            close()
        }
    }
    if(isOpen){
        return(
            <div className="backgroundStyle">
                <div className="deleteConteiner">
                    <p>Tem certeza que deseja deletar o colaborador <span>{colaborador.nome}</span>?</p>
                    <div className="buttons-delete">
                        <button onClick={handleDeleteColaborador}>SIM</button><button onClick={close}>CANCELAR</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default DeleteColaboradorModal;