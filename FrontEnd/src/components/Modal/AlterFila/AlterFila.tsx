import { IFilaData } from "../../../Interfaces/IFila";
import { IModalTarefa } from "../../../Interfaces/IModal";
import { useFilaData } from "../../../Services/Filas/useFilasData";
import { useTarefaAltern } from "../../../Services/Tarefas/useTarefaAltern";
import {useState} from 'react'
import {toast} from 'react-toastify'

export function AlterFila({isOpen, close, tarefa}:IModalTarefa){
    const {mutate} = useTarefaAltern();
    const [filaId, setFilaId] = useState<number>()
    const {data} = useFilaData()
    function handleAlterFila(evento:any){
        evento.preventDefault()
        try{
            mutate({
                filaId: filaId,
                tarefaId: tarefa.id
            })
            toast.success("Alteração realizada com sucesso!")
            close()
        }catch(error){
            toast.error("Ocorreu um erro: " + error)
        }
    }

    if(isOpen){
        return(
            <div className="backgroundStyle">
                <div className="contentAleterFila">
                    <title className="title">
                        <h1>Alterar fila</h1>
                    </title>
                    <form>
                        <select value={filaId} onChange={(e)=>setFilaId(parseInt(e.target.value))}>
                            <option value=""></option>
                            {data.map((item:IFilaData)=>{
                                return(
                                    <option value={item.id} key={item.id}>{item.nomeFila}</option>
                                )
                            })}
                        </select>
                        <button onClick={handleAlterFila}>Mudar Fila</button>
                    </form> 
                    <button className="btn-close" onClick={close}>x</button>
                </div>
            </div>
        )
    }
}