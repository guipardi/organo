import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {

    const itens = [
        'Back-End',
        'Front-End',
        'Mobile',
        'DevOps',
        'Ux Design',
        'Inovação e Gestão'
    ]

    const aoSalvar = (e) => {
        e.preventDefault()
        console.log('Form foi submetido')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label="Selecione o seu time" itens={itens}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;