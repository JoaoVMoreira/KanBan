import { useQuery } from "react-query";
import { api } from "../axios";

const fetchData = async () => {
    const response = await api.get('/colaborador')
    return response.data
}

export function useColaboradoresData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['colaboradores-data']
    })
    return query;
}
