import { useMutation, useQueryClient } from "react-query";
import { api } from "../axios";

const DeleteData = async (id: number) => {
    const response = await api.delete(`/filas/${id}`)
    return response;
}

export function useFilaDelete(){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: DeleteData,
        onSuccess: () => {
            queryClient.invalidateQueries('filas-get')
        }
    })

    return mutation
}