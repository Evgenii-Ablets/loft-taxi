import React from 'react'

export const BigButton = (props) => {
  return (
    <button className={props.className}
        onClick={() => {
          props.navigate(props.page)
        }}>
      {props.text}
    </button>
  )
}