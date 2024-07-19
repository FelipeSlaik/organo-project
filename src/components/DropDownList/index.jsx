import './DropDownList.css'

const DropDownList  = (props) => {
    console.log(props.itens)
    return(
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={event => props.changed(event.target.value)} required={props.filled} value={props.value}>
                    {props.itens.map(item => {
                     return <option key={item}>{item}</option>
            })}
            </select>
        </div>
    )
}

export default DropDownList