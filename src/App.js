import React from 'react'
import { Textarea } from './Textarea'

function App() {
  const [motorCycle, setMotorCycle] = React.useState(0)
  const [lightVehicle, setLightVehicle] = React.useState(0)
  const [heavyVehicle, setHeavyVehicle] = React.useState(0)
  const [total, setTotal] = React.useState(0)

  const handleInputChange = event => {
    const data = event.target.value

    setMotorCycle([...data].filter(l => parseInt(l) === 1).length)
    setLightVehicle([...data].filter(l => parseInt(l) === 2).length)
    setHeavyVehicle([...data].filter(l => parseInt(l) === 3).length)
    setTotal(data.replace(/\D+/g, '').length)
  }

  return (
    <div>
      <Textarea onChange={handleInputChange} />
      <table>
        <tbody>
          <tr>
            <td>Sepeda Motor</td>
            <td>{motorCycle}</td>
          </tr>
          <tr>
            <td>Kendaraan Ringan</td>
            <td>{lightVehicle}</td>
          </tr>
          <tr>
            <td>Kendaraan Berat</td>
            <td>{heavyVehicle}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
