import { IColaborador } from "../Interfaces/IColaborador"
import { api } from "./axios"
import { useQuery, useMutation } from 'react-query'

const fetchData = async () => {
    const response = await api.get('/colaborador')
    return response.data
}

const fetchPost = async (data: IColaborador) => {
    const response = await api.post('/colaborador', data)
    return response
}

const fetchDelete=async (id: number) => {
    const response = await api.delete(`/colaborador/${id}`)
    return response
}

export function GetColaboradores(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['colaboradores-data']
    })
    return query;
}

export function PostColaboradores(){
    const mutation = useMutation({
        mutationFn: fetchPost,
        mutationKey: ['colaborador-add']
    })

    return mutation;
}

export function DeleteColaboradores(){
    const mutation = useMutation({
        mutationFn: fetchDelete,
        mutationKey: ['delete-colaborador']
    })
    return mutation;
}
