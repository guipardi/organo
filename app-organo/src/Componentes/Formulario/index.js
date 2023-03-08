import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('Guilherme Pardi Borges')
    const [cargo, setCargo] = useState('Programador')
    const [imagem, setImagem] = useState('./Imagens/banner.jpg')
    const [time, setTime] = useState('')

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
        console.log(aoColaboradorCadastrado)
    }

    const aoColaboradorCadastrado = ({
        nome : nome,
        cargo : cargo, 
        imagem : imagem,
        time : time
    })
 
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto
                valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto
                valor={imagem} aoAlterado={valor => setImagem(valor)} obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label="Selecione o seu time" itens={itens} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;