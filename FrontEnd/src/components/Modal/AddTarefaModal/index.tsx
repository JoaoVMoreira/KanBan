import { MdFiberNew } from "react-icons/md";
import { IModalFila } from "../../../Interfaces/IModal";


export function AddModalTarefa({isOpen, close, fila}:IModalFila){
    if(isOpen){
        return(
            <div className="backgroundStyle">
                <div className="contentStyle">
                    <div className="title-tarefa">
                        <MdFiberNew/>
                        <h1>{fila.nomeFila}</h1>
                        <button onClick={close}>close</button>
                    </div>
                    <div>
                        <label htmlFor="input">
                            <p>Nome Tarefa</p>
                            <input type="text" />
                        </label>
                        <label htmlFor="select">
                            <p>Colaborador</p>
                            <select>
                                <option value="">Colaborador</option>
                            </select>
                        </label>
                        <div>
                            <label htmlFor="input">
                                <p>Data limite</p>
                                <input type="date" />
                            </label>
                            <label htmlFor="input">
                                <p>Data limite</p>
                                <select>
                                    <option value="1">urgente</option>
                                </select>
                            </label>
                        </div>
                        <label htmlFor="">
                            <p>Descrição</p>
                            <textarea/>
                        </label>
                        <button>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

