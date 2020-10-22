import React from 'react'
import PropTypes from 'prop-types'

function Textarea(props) {
  return <textarea onChange={props.onChange} rows={5} style={{ width: '100%' }}></textarea>
}

Textarea.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export { Textarea }
