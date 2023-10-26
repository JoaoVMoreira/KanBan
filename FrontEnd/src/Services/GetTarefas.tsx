import { IAlteraTarefa, ITarefa } from "../Interfaces/ITarefa";
import { api } from "./axios"
import { useMutation, useQuery } from "react-query"

export const fetchData = async (idFila:number) => {
    const response = await api.get(`/tarefa/${idFila}`)
    return response.data;
}

export function GetTarefas(idFila:number){
    const query = useQuery({
        queryFn: async () =>{
            const data = await fetchData(idFila)
            return data
        },
        queryKey: ['tarefa-get']
    })
    return query;
}

const PostData = async (data: ITarefa) => {
    const response = await api.post("/tarefa", data)
    return response
}

export function PostTarefa(){
    const mutation = useMutation({
        mutationFn: PostData,
        mutationKey: ['tarefa-post']
    })

    return mutation
}

const DeleteData = async (idTarefa:number) => {
    const response = await api.delete(`/tarefa/${idTarefa}`)
    return response
}

export function DeleteTarefa(){
    const mutation = useMutation({
        mutationFn: DeleteData,
        mutationKey: ['delete-tarefa']
    })

    return mutation;
}

const PutData = async (data:IAlteraTarefa) => {
    const response = api.put(`/tarefa/${data.tarefaId}`, data)
    return response
}

export function AlteraFila(){
    const mutation = useMutation({
        mutationFn: PutData,
        mutationKey:["altera-fila"]
    })

    return mutation;
}