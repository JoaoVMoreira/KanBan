import { IModal } from "../../../Interfaces/IModal";
import { PostProjetos } from "../../../Services/GetProjetos";
import '../modal.scss'
import { MdFiberNew } from "react-icons/md";
import {useState} from 'react'
import { IProjeto } from "../../../Interfaces/IProjetos";

function AddProjetoModal({isOpen, close}:IModal){

    const { mutate,isSuccess } = PostProjetos();
    const [nome, setNome] = useState<string>('');

    function handleCadastraProjeto(){
        if(nome == ''){
            alert('Favor preencher todos os campos')
        }
        const data:IProjeto = {
            nomeProjeto: nome
        }
        mutate(data)
        if(isSuccess){
            alert('Cadastro realizado com sucesso')
            close()
        }
    }

    if(isOpen){
        return(
            <>
                <div className="backgroundStyle">
                    <div className="contentStyle">
                        <div className="title-modal">
                            <span>
                                <MdFiberNew/><h1>NOVO PROJETO</h1>
                                <button onClick={close}>X</button>
                            </span>
                        </div>
                        <label htmlFor="input">
                            <p>Nome Projeto:</p>
                            <input type="text" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
                        </label>

                        <button onClick={handleCadastraProjeto}>+</button>
                    </div>
                </div>
            </>
        )
    }
}

export default AddProjetoModal;