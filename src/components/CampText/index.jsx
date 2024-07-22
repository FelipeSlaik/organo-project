import './CampText.css'

const CampText = (props) => {
   
    const placeholderModified = `${props.placeholder}...`
    
     
   

    const typed = (event) => {
    props.changed(event.target.value)
    }

    return (
        <div className="camp-text">
            <label>
                {props.label}
            </label>
            <input value={props.value}
            onChange={typed}  required={props.filled} 
            placeholder={placeholderModified}  
            />
        </div>
    )
}

export default CampText