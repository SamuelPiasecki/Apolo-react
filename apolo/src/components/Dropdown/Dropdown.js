import './Dropdown.css'

export const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={event => props.changed(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}