import { useMutation, useQueryClient } from "react-query";
import { api } from "../axios";

const DeleteData = async (idTarefa:number) => {
    const response = await api.delete(`/tarefa/${idTarefa}`)
    return response
}

export function useTarefasDelete(){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: DeleteData,
        onSuccess: () => {
            queryClient.invalidateQueries('tarefa-get')
        }
    })

    return mutation;
}