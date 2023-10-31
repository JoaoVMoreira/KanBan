import { useMutation, useQueryClient } from "react-query";
import { api } from "../axios";

const DeleteData = async () => {
    const id = localStorage.getItem("projetoId")
    const response = await api.delete(`/projeto/${id}`)
    return response;
}

export function useProjetosDelete(){
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: DeleteData,
        onSuccess: () => {
            queryClient.invalidateQueries('projeto-data')
        }
    })

    return mutation;
}