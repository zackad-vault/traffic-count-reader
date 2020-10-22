import React from 'react'
import PropTypes from 'prop-types'

function Table({ motorCycle, lightVehicle, heavyVehicle, total }) {
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

Table.propTypes = {
  total: PropTypes.number,
  motorCycle: PropTypes.number,
  lightVehicle: PropTypes.number,
  heavyVehicle: PropTypes.number,
}

export { Table }
