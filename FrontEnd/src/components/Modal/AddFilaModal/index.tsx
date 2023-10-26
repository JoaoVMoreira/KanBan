import { IModal } from "../../../Interfaces/IModal";
import { MdFiberNew } from "react-icons/md";
import { useState } from 'react'
import "../modal.scss"
import { PostFila } from "../../../Services/GetFilas";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export function AddFilaModal({isOpen, close}: IModal){

    const[nomeFila, setNomeFila] = useState<string>('')
    const { mutate, isSuccess } = PostFila()

    const handleAddFila = (elemento:any)=>{
        elemento.preventDefault();
        if(nomeFila == ''){
            toast.warning("Favor preencher o campo Nome da fila.")
        }
        const projetoid = localStorage.getItem("projetoId")
        const data= {
            nomeFila: nomeFila,
            projetoId: projetoid
        }
        mutate(data)
        if(isSuccess){
            toast.success("Fila cadastrada com sucesso!")
            close()
        }
    }


    if(isOpen){
        return(
            <div>
                <div className="backgroundStyle">
                    <ToastContainer/>
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