import { useQuery } from "react-query";
import { api } from "../axios";

export const fetchData = async () => {
    const id = localStorage.getItem("projetoId")
    const response = await api.get(`/filas/${id}`)
    return response.data;
}

export function useFilaData(){
    const mutation = useQuery({
        queryFn: fetchData,
        queryKey: ['filas-get']
    })

    return mutation;
}