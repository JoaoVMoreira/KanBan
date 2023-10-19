import { IColaborador, IColaboradores } from "../../Interfaces/IColaborador";
import { GetColaboradores, PostColaboradores } from "../../Services/GetColaboradores";
import Menu from "../../components/Menu";
import "./colaborador.scss"
import { MdFiberNew } from "react-icons/md";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import DeleteColaboradorModal from "../../components/Modal/DeleteColaboradorModal";


function Colaboradores(){

    const { data } = GetColaboradores();
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const navigate = useNavigate();
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState<IColaboradores>({id: 0,nome: '', cpf: 0});

    const { mutate, isSuccess } = PostColaboradores();

    function handleCadastraColaborador(){
        if(nome == '' || cpf == ''){
            alert("Favor preencher todos os campos")
        }

        const data: IColaborador = {
            nome: nome,
            cpf: parseInt(cpf)
        }

        mutate(data)

        if(isSuccess){
            alert("Colaborador cadastrado com sucesso")
            navigate(0)
        }
    }

    function handleDeletaModal(colaborador: IColaboradores){
        setDeleteModal(true)
        setSelectedId(colaborador)
        console.log(selectedId)
    }

    function handleCloseDeleteModal(){
        setDeleteModal(false)
        navigate(0)
    }

    return(
        <>
            <div className="page">
                <Menu/>
                <div className="conteiner">
                    <div className="list-colaboradores">
                        <div className="title"><MdFiberNew/><h2>COLABORADORES</h2></div>
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
                    </div>
                    <div className="add-colaborador">
                        <div className="title"><MdFiberNew/><h2>COLABORADORES</h2></div>
                        <div className="colab-form">
                            <label htmlFor="input">
                                <p>Nome</p>
                                <input type="text" value={nome} onChange={(e)=> {setNome(e.target.value)}}/>
                            </label>
                            <label htmlFor="input">
                                <p>CPF</p>
                                <input type="number" value={cpf} onChange={(e)=> {setCpf(e.target.value)}}/>
                            </label>
                        <button onClick={handleCadastraColaborador}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteColaboradorModal isOpen={deleteModal} close={handleCloseDeleteModal} colaborador={selectedId}/>
        </>
    )
    }

export default Colaboradores;