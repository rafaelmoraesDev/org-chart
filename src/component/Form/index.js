import "./Form.css"
import TextField from "../TextField"
import DropDown from "../DropDown"
import Button from "../Button"
import { useState } from "react"

const Form = props => {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [image, setImage] = useState("")
  const [team, setTeam] = useState("")

  const onSave = event => {
    event.preventDefault()
    props.onRegisterEmployee({
      name,
      role,
      image,
      team
    })
    setName("")
    setRole("")
    setImage("")
    setTeam("")
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Fill data for create employee card</h2>
        <TextField
          required={true}
          label="Name"
          placeholder="Type your name"
          value={name}
          onSave={value => setName(value)}
        />
        <TextField
          required={true}
          label="Role"
          placeholder="Type your role"
          value={role}
          onSave={value => setRole(value)}
        />
        <TextField
          label="Image"
          placeholder="Type image address"
          value={image}
          onSave={value => setImage(value)}
        />
        <DropDown
          required={true}
          label="Team"
          itens={props.teams}
          value={team}
          onSave={value => setTeam(value)}
        />
        <Button text="Create Card" />
      </form>
    </section>
  )
}
export default Form
