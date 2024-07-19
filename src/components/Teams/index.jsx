import Collaborator from '../Collaborator'
import './Time.css'

const Teams = (props) => {
    const timeBg = { backgroundColor: props.secondaryColor }
    const borderColor = { borderColor: props.primaryColor }
    return (

        <section className='time-container' style={timeBg}>
            <h3 style={borderColor}>{props.nome}</h3>
            <Collaborator />
            <Collaborator />
        </section>
    )
}

export default Teams