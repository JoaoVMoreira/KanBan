
export interface IFila{
    nomeFila: string,
    projetoId: number | null | string
}

export interface IFilaData{
    id: number, 
    nomeFila: string,
    projetoId: number | null | string
}

export interface IFilaContent{
    fila: IFilaData,
    close?: any
}
