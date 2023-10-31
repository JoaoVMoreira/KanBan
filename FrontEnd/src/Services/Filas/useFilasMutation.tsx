import { useMutation, useQueryClient } from "react-query";
import { IFila } from "../../Interfaces/IFila";
import { api } from "../axios";

const PostData = async (data:IFila) => {
    const response = await api.post("/filas", data)
    return response;
}

export function useFilaMutation(){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: PostData,
        onSuccess: () => {
            queryClient.invalidateQueries('filas-get')
        }
    })

    return mutation
}