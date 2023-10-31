import { IModalColaborador } from "../../../Interfaces/IModal";
import { useColaboradoresDelete } from "../../../Services/Colaboradores/useColaboradoresDelete";
import '../modal.scss'
import {ToastContainer, toast} from 'react-toastify'

function DeleteColaboradorModal({isOpen, close, colaborador}:IModalColaborador){
    const { mutate, isSuccess } = useColaboradoresDelete();
    function handleDeleteColaborador(evento: any){
        evento.preventDefault()
        mutate(colaborador.id)
        if(isSuccess){
            toast.success("Colaborador excluido com sucesso!")
            close()
        }
    }
    if(isOpen){
        return(
            <div className="backgroundStyle">
                <ToastContainer/>
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