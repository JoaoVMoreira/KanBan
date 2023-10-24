import { IModal } from "../../../Interfaces/IModal";
import { MdFiberNew } from "react-icons/md";
import { useState } from 'react'
import "../modal.scss"
import { PostFila } from "../../../Services/GetFilas";

export function AddFilaModal({isOpen, close}: IModal){

    const[nomeFila, setNomeFila] = useState<string>('')
    const[projetoId, setProjetoId] = useState<string | null>(localStorage.getItem("projetoId"))
    const { mutate, isSuccess } = PostFila()

    function handleAddFila(){
        if(nomeFila == ''){
            alert("Insira o nome da fila!")
        }
        const data= {
            nomeFila: nomeFila,
            projetoId: projetoId
        }
        mutate(data)
        if(isSuccess){
            alert("Fila cadastrada com sucesso")
            close()
        }
    }

    if(isOpen){
        return(
            <div>
                <div className="backgroundStyle">
                    <div className="contentStyle">
                        <div className="title-modal">
                            <span>
                                <MdFiberNew/><h1>NOVA FILA</h1>
                                <button onClick={close}>X</button>
                            </span>
                        </div>
                        <form onSubmit={handleAddFila}>
                            <label htmlFor="input">
                                <p>Nome Fila:</p>
                                <input type="text" value={nomeFila} onChange={(e)=>{setNomeFila(e.target.value)}}/>
                            </label>

                            <button type="submit">+</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}