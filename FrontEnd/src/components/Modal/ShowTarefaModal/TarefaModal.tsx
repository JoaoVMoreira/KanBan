import { MdFiberNew, MdOutlineWorkHistory } from "react-icons/md";
import { ITarefaContent } from "../../../Interfaces/ITarefa";
import { BsFillPatchCheckFill} from "react-icons/bs";

export function TarefaModal({tarefa}: ITarefaContent){

    return(
        <>
            <title className="title">
                {tarefa.filaId.nomeFila == "Doing" ? (
                    <MdOutlineWorkHistory/>
                ): tarefa.filaId.nomeFila == "Finish" ? (
                        <BsFillPatchCheckFill/>
                ) : (
                    <MdFiberNew/>
                )}
                    <h1>{tarefa.filaId.nomeFila}</h1>
            </title>
            <div className="infos">
                <h2>{tarefa.colaboradorId.nome}</h2>
                <p>{tarefa.nomeTarefa}</p>
                <p>{tarefa.descricao}</p>
                <div className="column-infos">
                    <span>
                        <p>Data Limite:</p>
                        <p>{tarefa.dataLimite.toString()}</p>
                    </span>
                    <span>
                        <p>Urgência:</p>
                        <p>{tarefa.urgencia}</p>
                    </span>
                </div>
            </div>
        </>
    )
}