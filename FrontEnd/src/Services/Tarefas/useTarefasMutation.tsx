import { useMutation, useQueryClient } from "react-query"
import { ITarefa } from "../../Interfaces/ITarefa"
import { api } from "../axios"

const PostData = async (data: ITarefa) => {
    const response = await api.post("/tarefa", data)
    return response
}

export function useTarefasMutation(){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: PostData,
        onSuccess: () => {
            queryClient.invalidateQueries('tarefa-get')
        }
    })

    return mutation
}
