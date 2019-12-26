import React from 'react'

import styles from './InputGroup.scss'
import FormControl from '../FormControl'

/**
 * Name: InputGroup
 * Desc: Render inputs like text, select, checkbox
 * @param {*} props
 */
const InputGroup = props => {
  return (
    <div className="formGroup">
      <FormControl {...props} />
    </div>
  )
}

export default InputGroup
