import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.scss'

/**
 * Name: Select
 * Desc: Render select box
 * @param {*} id
 * @param {*} showLabel
 * @param {*} label
 * @param {*} onChange
 * @param {*} onBlur
 * @param {*} options
 */
const Select = ({ id, onChange, onBlur, options, label, showLabel }) => {
  return (
    <React.Fragment>
      <label htmlFor={id} className={!showLabel && `${styles.hideLabel}`}>
        {label}
      </label>
      <div className={styles.select}>
        <select id={id} onChange={onChange} onBlur={onBlur}>
          {options.map((item, index) => (
            <option key={`${item.value}-${index}`} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  )
}

// Default Props
Select.defaultProps = {
  label: 'Select',
  showLabel: false
}

// Proptypes validation
Select.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  showLabel: PropTypes.bool
}

export default Select
