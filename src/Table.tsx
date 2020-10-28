import React from 'react'

type TableProps = {
  motorCycle: number
  lightVehicle: number
  heavyVehicle: number
  total: number
}

export function Table({ motorCycle, lightVehicle, heavyVehicle, total }: TableProps) {
  return (
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
  )
}
