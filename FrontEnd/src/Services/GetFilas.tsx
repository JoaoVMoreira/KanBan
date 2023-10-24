import { IFila } from "../Interfaces/IFila";
import { api } from "./axios"
import { useMutation, useQuery } from 'react-query'

const fetchData = async () => {
    const id = localStorage.getItem("projetoId")
    const response = await api.get(`/filas/${id}`)
    return response.data;
}

export function GetFila(){
    const mutation = useQuery({
        queryFn: fetchData,
        queryKey: ['filas-get']
    })

    return mutation;
}


const PostData = async (data:IFila) => {
    const response = await api.post("/filas", data)
    return response;
}

export function PostFila(){
    const query = useMutation({
        mutationKey: ['post-fila'],
        mutationFn: PostData
    })

    return query
}

const DeleteData = async (id: number) => {
    const response = await api.delete(`/filas/${id}`)
    return response;
}

export function DeleteFila(){
    const mutation = useMutation({
        mutationKey: ['delete-fila'],
        mutationFn: DeleteData
    })

    return mutation
}

