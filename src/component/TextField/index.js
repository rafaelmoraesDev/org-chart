import { useState } from "react"
import "./TextField.css"

const TextField = props => {
  const [value, setValue] = useState("")

  const onTyping = event => {
    props.onSave(event.target.value)
  }
  return (
    <div className="form-panel">
      <label>
        {props.label}
      </label>
      <input
        value={props.value}
        onChange={onTyping}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  )
}
export default TextField
