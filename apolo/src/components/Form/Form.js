import { useState } from 'react'
import { Button } from '../Button/Button'
import { Dropdown } from '../Dropdown/Dropdown'
import InputText from '../InputText'
import './Form.css'

export const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [grupo, setGrupo] = useState('')

    const saving = (event) => {
        event.preventDefault()
        props.registered({
            nome,
            cargo,
            imagem,
            grupo
        })
        setNome('')
        setCargo('')
        setImagem('')
        setGrupo('')
    }

    return (
        <section className="form">
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card dos seus personagens</h2>
                <InputText 
                    binding={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={nome}
                    changed={value => setNome(value)}
                />
                <InputText 
                    binding={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={cargo}
                    changed={value => setCargo(value)}
                />
                <InputText
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    changed={value => setImagem(value)}
                />
                <Dropdown 
                    binding={true}
                    label="Grupo" 
                    itens={props.grupos}
                    value={grupo}
                    changed={value => setGrupo(value)}
                />
                <Button> 
                    Criar Card
                </Button>
            </form>
        </section>
    )
}