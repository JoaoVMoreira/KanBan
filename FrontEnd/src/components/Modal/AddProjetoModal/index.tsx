import { IModal } from "../../../Interfaces/IModal";
import { PostProjetos } from "../../../Services/GetProjetos";
import '../modal.scss'
import { MdFiberNew } from "react-icons/md";
import {useState} from 'react'
import { IProjeto } from "../../../Interfaces/IProjetos";
import {ToastContainer, toast} from  'react-toastify'

function AddProjetoModal({isOpen, close}:IModal){

    const { mutate,isSuccess } = PostProjetos();
    const [nome, setNome] = useState<string>('');

    function handleCadastraProjeto(evento: any){
        evento.preventDefault()
        if(nome == ''){
            toast.warning("Favor preencher o nome do projeto!")
        }else{
            const data:IProjeto = {
                nomeProjeto: nome
            }
            mutate(data)
            if(isSuccess){
                toast.success("Cadastro realizado com sucesso")
                close()
            }
        }
    }

    if(isOpen){
        return(
            <>
                <div className="backgroundStyle">
                    <ToastContainer/>
                    <div className="contentStyle">
                        <div className="title-modal">
                            <span>
                                <MdFiberNew/><h1>NOVO PROJETO</h1>
                                <button onClick={close}>X</button>
                            </span>
                        </div>
                        <form onSubmit={handleCadastraProjeto}>
                            <label htmlFor="input">
                                <p>Nome Projeto:</p>
                                <input type="text" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
                            </label>

                            <button type="submit">+</button>
                        </form>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default AddProjetoModal;