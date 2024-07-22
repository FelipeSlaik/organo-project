import Collaborator from '../Collaborator'
import './Time.css'

const Teams = (props) => {
    const timeBg = { backgroundColor: props.secondaryColor }
    const borderColor = { borderColor: props.primaryColor }
    return (

        (props.collaborators.length > 0) ? <section className='time-container' style={timeBg}>
            <h3 style={borderColor}>{props.nome}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Collaborator key={collaborator} name={collaborator.name} carg={collaborator.carg} image={collaborator.image} />)}
            </div>
        </section>
        : ''
    )
}

export default Teams