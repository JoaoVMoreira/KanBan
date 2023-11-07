import { MdFiberNew, MdOutlineWorkHistory } from "react-icons/md"
import { IFilaContent } from "../../../Interfaces/IFila"
import { BsFillPatchCheckFill } from "react-icons/bs"
import { useTarefasMutation } from "../../../Services/Tarefas/useTarefasMutation"
import { useColaboradoresData } from "../../../Services/Colaboradores/useColaboradoresData"
import { useState } from 'react'
import {toast} from 'react-toastify'
import { IColaboradores } from "../../../Interfaces/IColaborador"

export function TarefaModal({fila, close}:IFilaContent){
    const { mutate, error } = useTarefasMutation()
    const {data} = useColaboradoresData()
    const[nomeTarefa, setNomeTarefa] = useState<string>('')
    const[colaboradorId, setColaboradorId] = useState<string>('')
    const[dataLimite, setDataLimite] = useState<string>('')
    const[urgencia, setUrgencia] = useState<string>('')
    const[descricao, setDescricao] = useState<string>('')

    function handleAddTarefa(evento: any){
        evento.preventDefault()

        if(nomeTarefa == '' || colaboradorId == "" || dataLimite == "" || urgencia == ""){
            toast.warning("Favor preencher todos os campos obrigatorios!")
        }else{
            const data = {
                nomeTarefa: nomeTarefa, 
                colaboradorId: parseInt(colaboradorId),
                dataLimite: new Date(dataLimite),
                urgencia: urgencia,
                descricao: descricao,
                filaAtual: fila.id
            }
            try{
                mutate(data)
                toast.success("Tarefa cadastrada com sucesso!")
                setDataLimite('')
                setDescricao('')
                setNomeTarefa('')
                setUrgencia('')
                close()
            }catch{
                toast.error("Erro ao cadastrar tarefa: " + error)
                close()
            }
        }
        
    }
    return(
        <>
            <div className="title-tarefa">
                        {fila.nomeFila == "Doing" ? (
                            <MdOutlineWorkHistory/>
                        ): fila.nomeFila == "Finish" ? (
                                <BsFillPatchCheckFill/>
                        ) : (
                            <MdFiberNew/>
                        )}
                        <h1>{fila.nomeFila}</h1>
                        <button onClick={close}>x</button>
                    </div>
                    <form onSubmit={handleAddTarefa}>
                        <label htmlFor="input">
                            <p>Nome Tarefa</p>
                            <input type="text" value={nomeTarefa} onChange={(e)=> setNomeTarefa(e.target.value)}/>
                        </label>
                        <label htmlFor="select">
                            <p>Colaborador</p>
                            <select value={colaboradorId} onChange={(e)=>setColaboradorId(e.target.value)}>
                                <option accessKey=""></option>
                                {data?.map((item:IColaboradores)=>{
                                    return(
                                        <option value={item.id} key={item.id}>{item.nome}</option>
                                    )
                                })
                                }
                            </select>
                        </label>
                        <div className="double-input">
                            <label htmlFor="input">
                                <p>Data limite</p>
                                <input type="date" value={dataLimite} onChange={(e)=>setDataLimite(e.target.value)}/>
                            </label>
                            <label htmlFor="input">
                                <p>Urgência</p>
                                <select value={urgencia} onChange={(e)=>setUrgencia(e.target.value)}>
                                    <option accessKey=""></option>
                                    <option value="NaoUrgente">Não Urgente</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Atentar">Atentar</option>
                                    <option value="Urgente">Urgente</option>
                                    <option value="UrgenciaMaxima">Urgência Máxima</option>
                                </select>
                            </label>
                        </div>
                        <label htmlFor="">
                            <p>Descrição</p>
                            <textarea value={descricao} onChange={(e)=>setDescricao(e.target.value)}/>
                        </label>
                        <button type="submit">+</button>
                    </form>
        </>
    )
}