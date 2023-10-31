import { useQuery } from "react-query";
import { api } from "../axios";

const fetchData = async () => {
    const response = await api.get('/projeto')
    return response.data
}

export function useProjetosData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['projeto-data']
    })
    return query;
}