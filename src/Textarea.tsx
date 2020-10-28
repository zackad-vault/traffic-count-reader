import React from 'react'

type TextareaProps = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function Textarea(props: TextareaProps) {
  return <textarea onChange={props.onChange} rows={5} style={{ width: '100%' }}></textarea>
}
