import { useQuery, useMutation } from "react-query"
import { api } from "./axios"
import { IProjeto } from "../Interfaces/IProjetos"

const fetchData = async () => {
    const response = await api.get('/projeto')
    return response.data
}

export function getProjetos(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['projeto-data']
    })
    return query;
}

const PostData = async (data: IProjeto) => {
    const response = await api.post("/projeto", data)
    return response
}

export function PostProjetos(){
    const mutation = useMutation({
        mutationFn: PostData,
        mutationKey: ['post-projeto']
    })

    return mutation
}

const DeleteData = async () => {
    const id = localStorage.getItem("projetoId")
    const response = await api.delete(`/projeto/${id}`)
    return response;
}

export function DeleteProjeto(){
    const mutation = useMutation({
        mutationFn: DeleteData,
        mutationKey: ['delete-projeto']
    })

    return mutation;
}

