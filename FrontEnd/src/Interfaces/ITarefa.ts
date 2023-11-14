import { IColaboradores } from "./IColaborador"
import { IFilaData } from "./IFila"

export interface ITarefa{
    nomeTarefa: string, 
    colaboradorId: number,
    dataLimite: Date,
    urgencia: string,
    descricao?: string,
    filaAtual: number
}

export interface IAlteraTarefa{
    tarefaId: number
    filaId?: number
}

export interface ITarefaData{
    id: number,
    nomeTarefa: string, 
    colaboradorId: IColaboradores,
    dataLimite: Date,
    urgencia: string,
    descricao?: string,
    filaId: IFilaData
}

export interface ITarefaContent{
    tarefa: ITarefaData,
}

export interface IButtonsControler{
    moverTarefa: ()=>void
    deletarTarefa: ()=>void
    close: any;
}