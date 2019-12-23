import React from 'react'
import PropTypes from 'prop-types'

import Select from './Select'
import CheckBox from './Checkbox'
import Text from './Text'

/**
 * Name: FormControl
 * Desc: Render input fields
 * @param {*} type
 */
const FormControl = props => {
  const { type, ...rest } = props
  return (
    <React.Fragment>
      {type === 'select' && <Select {...rest} />}
      {(type === 'text' || type === 'password') && <Text {...rest} />}
      {type === 'checkbox' && <CheckBox {...rest} />}
    </React.Fragment>
  )
}

// PropTypes Validation
FormControl.propTypes = {
  type: PropTypes.string.isRequired
}

export default FormControl
