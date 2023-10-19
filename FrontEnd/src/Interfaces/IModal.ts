import { IColaboradores } from "./IColaborador"
import { IProjeto } from "./IProjetos"

export interface IModalColaborador{
    isOpen: boolean,
    close: any,
    colaborador: IColaboradores
}

export interface IModal{
    isOpen: boolean,
    close: any
}