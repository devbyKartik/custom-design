import React from 'react'

import styles from './Text.scss'

const renderIcon = icon => {
  return <span className={styles[icon]} />
}

// const renderClass = error => {
//   return error
//     ? `${styles.formControl} ${styles.error}`
//     : `${styles.formControl}`
// }

/**
 * Name: Text
 * Desc: Render text
 * @param {*} props
 */
const Text = props => {
  const { label, icon, errormsg, error, id, name, ...rest } = props

  //let errorMessage = errormsg
  //let hasError = error

  // if (
  //   !errormsg &&
  //   props.errors &&
  //   props.errors[name] 
  //   //&&
  //   //props.dirties &&
  //   //props.dirties[name]
  // ) {
  //   errorMessage = props.errors[name]
  //  // hasError = !!errorMessage
  // }

  return (
    <React.Fragment>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={icon ? styles.inputFlex : styles.inputWrapper}>
        <input
          name={name}          
          id={id}
          className="formControl"
          aria-label={name}
          {...rest}
        />
        {icon && renderIcon(icon)}
        {/* {errorMessage && <p>{errorMessage}</p>} */}
      </div>
    </React.Fragment>
  )
}

Text.propTypes = {}

export default Text
