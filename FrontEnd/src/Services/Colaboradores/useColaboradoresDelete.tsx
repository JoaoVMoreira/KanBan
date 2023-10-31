import { useMutation, useQueryClient } from "react-query";
import { api } from "../axios";

const fetchDelete=async (id: number) => {
    const response = await api.delete(`/colaborador/${id}`)
    return response
}

export function useColaboradoresDelete(){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchDelete,
        onSuccess: () => {
            queryClient.invalidateQueries('colaboradores-data')
        }
    })
    return mutation;
}