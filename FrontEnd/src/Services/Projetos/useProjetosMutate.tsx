import { useMutation, useQueryClient } from "react-query"
import { IProjeto } from "../../Interfaces/IProjetos"
import { api } from "../axios"

const PostData = async (data: IProjeto) => {
    const response = await api.post("/projeto", data)
    return response
}
export function useProjetosMutate(){
    const queryClient = useQueryClient(); 
    const mutation = useMutation({
        mutationFn: PostData,
        onSuccess: ()=>{
            queryClient.invalidateQueries('projeto-data')
        }
    })

    return mutation
}