import { useState } from 'react'
import Button from '../Button'
import CampText from '../CampText'
import DropDownList from '../DropDownList'
import './FormCamp.css'
const FormCamp = (props) => {

    const [name, setName] = useState('')
    const [carg, setCarg] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')


    const save = (event) => {
        event.preventDefault()
        props.registeredCollaborator({
            name,
            carg,
            image,
            time,
        })
        setName('')
        setCarg('')
        setImage('')
        setTime('')
    }

    return (
        <section className='form-container'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampText 
                    filled={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    changed={value => setName(value)}
                />
                <CampText filled={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={carg}
                    changed={value => setCarg(value)}
                />
                <CampText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    changed={value => setImage(value)}
                />
                <DropDownList
                    filled={true}
                    label="Time"
                    itens={props.timeName}
                    value={time}
                    changed={value => setTime(value)}

                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default FormCamp