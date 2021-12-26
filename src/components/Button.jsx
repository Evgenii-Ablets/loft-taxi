import React from 'react'
import PropTypes from 'prop-types'

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
BigButton.propTypes = {
  className: PropTypes.string,
  page: PropTypes.string,
  navigate: PropTypes.func,
  text: PropTypes.string
}
