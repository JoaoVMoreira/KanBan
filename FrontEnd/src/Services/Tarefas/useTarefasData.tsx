import { useQuery } from "react-query";
import { api } from "../axios";

export const fetchData = async (idFila:number) => {
    const response = await api.get(`/tarefa/${idFila}`)
    return response.data;
}

export function useTarefasData(idFila:number){
    const query = useQuery({
        queryFn: async () =>{
            const data = await fetchData(idFila)
            return data
        },
        queryKey: ['tarefa-get']
    })
    return query;
}
