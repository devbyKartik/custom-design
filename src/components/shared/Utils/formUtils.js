const checkValidation = (values, setFormState, onValidate, dirties) => {
  let returnedErrors = onValidate(values)
  let dirtyFields = dirties
  if (dirties === null) {
    dirtyFields = {}
    Object.keys(returnedErrors).forEach(fieldName => {
      dirtyFields[fieldName] = true
    })
  }

  /** Optimise re-rendering with object shallow cheking */
  // if (returnedErrors !== errors) {
    
  // }

  
  setFormState({ errors: returnedErrors, dirties: dirtyFields })

  return returnedErrors
}

export const onFormStateChange = (
  event,
  { onSubmit, onValidate, values, errors, setFormState, dirties }
) => {
  
  const { target } = event
  
  if (target.nodeName === 'FORM') {
    event.preventDefault()
    let returnedErrors = checkValidation(
      values,
      setFormState,
      onValidate,
      null
    )
    onSubmit(values, returnedErrors, setFormState)
    return { values, errors }
  }

  let fieldValue = null
  if (target.nodeName === 'INPUT' && target.type === 'text') {
    fieldValue = target.value
  } else if (target.nodeName === 'INPUT' && target.type === 'checkbox') {
    fieldValue = !!target.checked
  } else if (target.nodeName === 'INPUT' && target.type === 'password') {
    fieldValue = target.value
  }

  values[target.name] = fieldValue
  dirties[target.name] = true

  let returnedErrors = checkValidation(
    values,    
    setFormState,
    onValidate,
    dirties
  )

  return { values, errors: returnedErrors }
}
