import { useQuery } from "react-query";
import { api } from "../axios";

export const fetchData = async () => {
    const response = await api.get(`/tarefa`)
    return response.data;
}

export function useTarefasData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['tarefa-get']
    })
    return query;
}
