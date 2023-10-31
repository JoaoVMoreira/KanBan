import { IColaborador, IColaboradores } from "../../Interfaces/IColaborador";
import Menu from "../../components/Menu";
import "./colaborador.scss"
import { MdFiberNew } from "react-icons/md";
import {useState} from 'react'
import DeleteColaboradorModal from "../../components/Modal/DeleteColaboradorModal";
import InputMask from 'react-input-mask'
import { ToastContainer, toast} from 'react-toastify'
import { useColaboradoresData } from "../../Services/Colaboradores/useColaboradoresData";
import { useColaboradoresMutation } from "../../Services/Colaboradores/useColaboradoresMutation";

function Colaboradores(){

    const { data } = useColaboradoresData();
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState<IColaboradores>({id: 0,nome: '', cpf: ''});

    const { mutate, isSuccess } = useColaboradoresMutation();

    function handleCadastraColaborador(evento: any){
        if(nome == '' || cpf == ''){
            evento.preventDefault()
            toast.warn("Favor preencher todos os campos!")
        }else{
            evento.preventDefault()
            const data: IColaborador = {
                nome: nome,
                cpf: cpf
            }
            mutate(data)
            if(isSuccess){   
                toast.success("Colaborador cadastrado com sucesso")
                setCpf("")
                setNome("")
            }
        }
    }
    function handleDeletaModal(colaborador: IColaboradores){
        setDeleteModal(true)
        setSelectedId(colaborador)
    }
    function handleCloseDeleteModal(){
        setDeleteModal(false)
    }

    return(
        <>
            <div className="page">
                <Menu/>
                <div className="conteiner">
                    <ToastContainer/>
                    <section className="list-colaboradores">
                        <title className="title"><MdFiberNew/><h2>COLABORADORES</h2></title>
                        {!data || data.length ===0 ? (
                            <div className="no-content">
                                <p>Sem colaboradores cadastrados</p>
                            </div>
                        ): (
                            <>
                                {
                                    data?.map((item:IColaboradores)=>{
                                        return(
                                            <div key={item.id}>
                                                <button className="colaborador" onClick={()=>{handleDeletaModal(item)}}>
                                                    <h3>{item.nome}</h3>
                                                    <p>{item.cpf}</p>
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )}
                        
                    </section>
                    <section className="add-colaborador">
                        <title className="title"><MdFiberNew/><h2>COLABORADORES</h2></title>
                        <form className="colab-form" onSubmit={handleCadastraColaborador}>
                            <label htmlFor="input">
                                <p>Nome</p>
                                <input type="text" value={nome} onChange={(e)=> {setNome(e.target.value)}}/>
                            </label>
                            <label htmlFor="input">
                                <p>CPF</p>
                                <InputMask mask="999.999.999-99" value={cpf} onChange={(e)=> {setCpf(e.target.value)}}/>
                            </label>
                            <button type="submit">+</button>
                        </form>
                    </section>
                </div>
            </div>
            <DeleteColaboradorModal isOpen={deleteModal} close={handleCloseDeleteModal} colaborador={selectedId}/>
        </>
    )
    }

export default Colaboradores;