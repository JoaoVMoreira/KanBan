import "./menu.scss"

function Menu(){
    return(
        <>
            <div className="menu">
                <div className="projeto-menu">
                    <p>PROJETOS</p>
                    <button>+</button>
                </div>
                <div className="btn-colaborador">
                    <button>COLABORADORES</button>
                </div>
                <div className="lista-projetos">
                    <button>NOME PROJETO</button>
                </div>
            </div>
        </>
    )
}

export default Menu;