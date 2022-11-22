import "./DropDown.css"
const DropDown = props => {
  return (
    <div className="drop-down">
      <label>
        {props.label}
      </label>
      <select
        onChange={event => props.onSave(event.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map(item => {
          return (
            <option key={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default DropDown
