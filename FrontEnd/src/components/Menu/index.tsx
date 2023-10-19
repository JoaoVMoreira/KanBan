import { IProjetos } from "../../Interfaces/IProjetos";
import { getProjetos } from "../../Services/GetProjetos";
import { useState } from 'react'
import "./menu.scss"
import AddProjetoModal from "../Modal/AddProjetoModal";
import { useNavigate } from "react-router-dom";

function Menu(){
    const { data } = getProjetos();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setIsOpenModal(true);
    }

    function handleCloseModal(){
        setIsOpenModal(false)
        navigate(0)
    }

    function handleNavigateMenu(projetoId:number){
        navigate('/')
        localStorage.setItem("projetoId", JSON.stringify(projetoId))
        navigate(0)
    }

    return(
        <>
            <div className="menu">
                <div className="projeto-menu">
                    <p>PROJETOS</p>
                    <button onClick={handleOpenModal}>+</button>
                </div>
                <div >
                <a href="/colaboradores"><button className="btn-colaborador">COLABORADORES</button></a>
                </div>
                <div className="lista-projetos">
                    {
                        data?.map((item:IProjetos)=>{
                            return(
                                <button onClick={() => {handleNavigateMenu(item.id)}} key={item.id}>{item.nome}</button>
                            )
                        })
                    }
                </div>
            </div>
            <AddProjetoModal isOpen={isOpenModal} close={handleCloseModal}/>
        </>
    )
}

export default Menu;