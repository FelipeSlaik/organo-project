import CampText from '../CampText'
import './FormCamp.css'
const FormCamp = () => {
    return (
        <section className='form-container'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampText label="Nome" placeholder="Digite seu nome" />
                <CampText label="Cargo" placeholder="Digite seu cargo" />
                <CampText label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default FormCamp