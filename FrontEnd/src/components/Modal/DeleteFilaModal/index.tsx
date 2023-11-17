import { ToastContainer, toast } from "react-toastify";
import { IModalFila } from "../../../Interfaces/IModal";
import '../modal.scss'
import { useFilaDelete } from "../../../Services/Filas/useFilasDelete";

function DeleteFilaModal({isOpen, close, fila}:IModalFila){

    const { mutate } = useFilaDelete()
    function deleteFila(evento: any){
        evento.preventDefault()
        try{
            mutate(fila.id)
            toast.success("Fila excluída com sucesso!")
        }catch(error){
            toast.error("Ocorreu um erro: " + error)
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