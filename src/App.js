import { useState } from "react"
import Banner from "./component/Banner"
import Footer from "./component/Footer"
import Form from "./component/Form"
import Team from "./component/Team"

const App = () => {
  const teams = [
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      name: "UX and Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9"
    }
  ]
  const [employees, setEmployees] = useState([])
  const onAddNewEmployee = employee => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(team => team.name)}
        onRegisterEmployee={employee => onAddNewEmployee(employee)}
      />
      {teams.map(team =>
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(employee => employee.team === team.name)}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
