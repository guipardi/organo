import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} placeholder={placeholderModificada} required={props.obrigatorio}></input>
        </div>
    )
}

export default CampoTexto;