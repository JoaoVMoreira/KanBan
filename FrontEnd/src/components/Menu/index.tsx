import { IProjetos } from "../../Interfaces/IProjetos";
import { useState } from 'react'
import "./menu.scss"
import AddProjetoModal from "../Modal/AddProjetoModal";
import { useNavigate } from "react-router-dom";
import { useProjetosData } from "../../Services/Projetos/useProjetosData";

function Menu(){
    const { data } = useProjetosData();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setIsOpenModal(true);
    }

    function handleCloseModal(){
        setIsOpenModal(false)
    }

    function handleNavigateMenu(projetoId:number){
        localStorage.setItem("projetoId", JSON.stringify(projetoId))
        navigate("/")
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
                {!data || data.length === 0 ?(
                    <div className="lista-projetos">
                        <p>Sem projetos cadastrados</p>
                    </div>
                ): (
                    <div className="lista-projetos">
                    {
                        data?.map((item:IProjetos)=>{
                            return(
                                <button onClick={() => {handleNavigateMenu(item.id)}} key={item.id}>{item.nome}</button>
                            )
                        })
                    }
                </div>
                )}
                
            </div>
            <AddProjetoModal isOpen={isOpenModal} close={handleCloseModal}/>
        </>
    )
}

export default Menu;