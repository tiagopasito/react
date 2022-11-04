import './Botao.css'

//um botao num formulario por padrao submete o formulario quando eh clicado
const Botao = (props) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao