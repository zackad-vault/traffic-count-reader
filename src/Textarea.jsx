import React from 'react'

function Textarea(props) {
  return <textarea onChange={props.onChange} rows={5} style={{ width: '100%' }}></textarea>
}

export { Textarea }
