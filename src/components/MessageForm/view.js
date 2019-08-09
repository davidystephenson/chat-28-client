import React from 'react'

export default function View (props) {
  const {
    onSubmit,
    value,
    onChange
  } = props

  return <div>
    <h3>New message</h3>

    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={value}
        onChange={onChange}
      />

      <button type='submit'>Send</button>
    </form>
  </div>
}
