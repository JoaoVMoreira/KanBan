import { IColaboradores } from "./IColaborador"
import { IFilas } from "./IFila"

export interface IModalColaborador{
    isOpen: boolean,
    close: any,
    colaborador: IColaboradores
}

export interface IModalFila{
    isOpen: boolean,
    close: any,
    fila: IFilas
}

export interface IModal{
    isOpen: boolean,
    close: any
}
