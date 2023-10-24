import { IModalFila } from "../../../Interfaces/IModal";
import { DeleteFila } from "../../../Services/GetFilas";
import '../modal.scss'

function DeleteFilaModal({isOpen, close, fila}:IModalFila){

    const { mutate, isSuccess } = DeleteFila()
    function deleteFila(){
        mutate(fila.id)
        if(isSuccess){
            alert("Fila excluida com sucesso")
            close()
        }
    }
    if(isOpen){
        return(
            <div className="backgroundStyle">
                <div className="deleteConteiner">
                    <p>Tem certeza que deseja deletar o colaborador <span>{}</span>?</p>
                    <div className="buttons-delete">
                        <button onClick={deleteFila}>SIM</button><button onClick={close}>CANCELAR</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default DeleteFilaModal;