import './Colaborador.css'

const Colaborador = (props) => {

    const backgroundColor = {backgroundColor: props.corDeFundo}

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={backgroundColor}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>        
    )
}

export default Colaborador
