import './CampText.css'

const CampText = (props) => {
   
    const placeholderModified = `${props.placeholder}...`
   
    return (
        <div className="camp-text">
            <label>
                {props.label}
            </label>
            <input 
                placeholder={placeholderModified}
            />
        </div>
    )
}

export default CampText