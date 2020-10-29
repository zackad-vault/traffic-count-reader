import React, { useState } from 'react'
import { countBy } from 'lodash'

import { Textarea } from './Textarea'
import { Table } from './Table'
import style from './App.module.css'

function App() {
  const [motorCycle, setMotorCycle] = useState(0)
  const [lightVehicle, setLightVehicle] = useState(0)
  const [heavyVehicle, setHeavyVehicle] = useState(0)
  const [total, setTotal] = useState(0)
  const [rawData, setRawData] = useState({})

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const data = event.target.value

    setRawData(countBy(data))

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
        <pre>{JSON.stringify(rawData, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
