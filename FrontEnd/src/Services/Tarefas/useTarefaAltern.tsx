import { useMutation, useQueryClient } from "react-query";
import { IAlteraTarefa } from "../../Interfaces/ITarefa";
import { api } from "../axios";

const PutData = async (data:IAlteraTarefa) => {
    const response = api.put(`/tarefa/${data.tarefaId}`, data)
    return response
}

export function useTarefaAltern(){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: PutData,
        onSuccess: () => {
            queryClient.invalidateQueries('tarefa-get')
        }
    })

    return mutation;
}