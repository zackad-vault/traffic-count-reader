import React from 'react'
import { Textarea } from './Textarea'
import { Table } from './Table'
import style from './App.module.css'

function App() {
  const [motorCycle, setMotorCycle] = React.useState(0)
  const [lightVehicle, setLightVehicle] = React.useState(0)
  const [heavyVehicle, setHeavyVehicle] = React.useState(0)
  const [total, setTotal] = React.useState(0)

  const handleInputChange = (event) => {
    const data = event.target.value

    setMotorCycle([...data].filter((l) => parseInt(l) === 1).length)
    setLightVehicle([...data].filter((l) => parseInt(l) === 2).length)
    setHeavyVehicle([...data].filter((l) => parseInt(l) === 3).length)
    setTotal(data.replace(/\D+/g, '').length)
  }

  return (
    <div className={style.App}>
      <div className={style.container}>
        <Textarea onChange={handleInputChange} />
        <Table motorCycle={motorCycle} lightVehicle={lightVehicle} heavyVehicle={heavyVehicle} total={total} />
      </div>
    </div>
  )
}

export default App
