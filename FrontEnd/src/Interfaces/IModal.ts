import { IColaboradores } from "./IColaborador"
import { IFilaData } from "./IFila"
import { ITarefaData } from "./ITarefa"

export interface IModalColaborador{
    isOpen: boolean,
    close: any,
    colaborador: IColaboradores
}

export interface IModalFila{
    isOpen: boolean,
    close: any,
    fila: IFilaData
}

export interface IModalTarefa{
    isOpen: boolean,
    close: any,
    tarefa: ITarefaData
}

export interface IModal{
    isOpen: boolean,
    close: any
}

export interface ITarefaShowContent{
    close: any,
    tarefa: ITarefaData
}
