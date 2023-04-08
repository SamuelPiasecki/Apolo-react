import './InputText.css'

export const InputText = (props) => {

    const typed = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={typed} required={props.binding} placeholder={props.placeholder}/>
        </div>
    )
}
