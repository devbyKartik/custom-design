import React from 'react'

import styles from './Checkbox.scss'

/**
 * Name: Checkbox
 * Desc: Render checkbox
 * @param {*} props
 */
const Checkbox = props => {
  return (
    <div className={styles.checkBox}>
      <input type="checkbox" id={props.id} {...props} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

Checkbox.propTypes = {}

export default Checkbox
