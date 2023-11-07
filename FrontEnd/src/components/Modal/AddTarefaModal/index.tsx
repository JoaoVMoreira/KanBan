import { IModalFila } from "../../../Interfaces/IModal";
import './AddTarefaModal.scss'
import { TarefaModal } from "./TarefaModal";


export function AddModalTarefa({isOpen, close, fila}:IModalFila){

    

    if(isOpen){
        return(
            <div className="backgroundStyle">
                {fila.nomeFila == "Doing" ? (
                    <div className="tarefa-conteiner-doing">
                        <TarefaModal fila={fila} close={close}/>
                    </div>    
                ) : fila.nomeFila == "Finish" ? (
                    <div className="tarefa-conteiner-finish">
                        <TarefaModal fila={fila} close={close}/>
                    </div>
                ) : (
                    <div className="tarefa-conteiner">
                        <TarefaModal fila={fila} close={close}/>
                    </div>
                )}
            </div>
        )
    }
}

