import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const backgroundColor = {backgroundColor: props.corSecundaria}
    const borderColor = {borderColor: props.corPrimaria}

    //(props.colaboradores.length > 0) ? --> se o time nao tiver colaboradores, nao coloca esse time na tela
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={backgroundColor}> 
            <h3 style={borderColor}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>            
        </section>
        : ''
    )
}


export default Time