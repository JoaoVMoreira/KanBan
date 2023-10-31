import { useMutation, useQueryClient } from "react-query";
import { IColaborador } from "../../Interfaces/IColaborador";
import { api } from "../axios";

const fetchPost = async (data: IColaborador) => {
    const response = await api.post('/colaborador', data)
    return response
}

export function useColaboradoresMutation(){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchPost,
        onSuccess: () => {
            queryClient.invalidateQueries('colaboradores-data')
        }
    })

    return mutation;
}