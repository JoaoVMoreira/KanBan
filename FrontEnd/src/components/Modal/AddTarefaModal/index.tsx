import { MdFiberNew } from "react-icons/md";
import { IModalFila } from "../../../Interfaces/IModal";
import { PostTarefa } from "../../../Services/GetTarefas";
import { useState } from "react";
import { GetColaboradores } from "../../../Services/GetColaboradores";
import { IColaboradores } from "../../../Interfaces/IColaborador";

export function AddModalTarefa({isOpen, close, fila}:IModalFila){

    const { mutate, error } = PostTarefa()
    const {data} = GetColaboradores()
    const[nomeTarefa, setNomeTarefa] = useState<string>('')
    const[colaboradorId, setColaboradorId] = useState<string>('')
    const[dataLimite, setDataLimite] = useState<string>('')
    const[urgencia, setUrgencia] = useState<string>('')
    const[descricao, setDescricao] = useState<string>('')

    function handleAddTarefa(){
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
            alert("Tarefa cadastrada com sucesso!")
        }catch{
            alert("Ocorreu um erro: " + error)
        }
    }

    if(isOpen){
        return(
            <div className="backgroundStyle">
                <div className="tarefa-conteiner">
                    <div className="title-tarefa">
                        <MdFiberNew/>
                        <h1>{fila.nomeFila}</h1>
                        <button onClick={close}>close</button>
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
                </div>
            </div>
        )
    }
}

