import { ToastContainer, toast } from "react-toastify";
import { IModalFila } from "../../../Interfaces/IModal";
import '../modal.scss'
import { useFilaDelete } from "../../../Services/Filas/useFilasDelete";

function DeleteFilaModal({isOpen, close, fila}:IModalFila){

    const { mutate, isSuccess } = useFilaDelete()
    function deleteFila(evento: any){
        evento.preventDefault()
        mutate(fila.id)
        if(isSuccess){
            toast.success("Fila deletada com sucesso")
            close()
        }
    }
    if(isOpen){
        return(
            <div className="backgroundStyle">
                <ToastContainer/>
                <div className="deleteConteiner">
                    <p>Tem certeza que deseja deletar o a fila <span>{fila.nomeFila}</span>?</p>
                    <div className="buttons-delete">
                        <button onClick={deleteFila}>SIM</button><button onClick={close}>CANCELAR</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default DeleteFilaModal;