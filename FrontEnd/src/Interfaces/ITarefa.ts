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
    filaId: number
}