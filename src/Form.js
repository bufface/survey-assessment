import React, { useState, useReducer } from 'react'

import survey from './survey-data.json'
import Field from './Field'
import SubmitButton from './SubmitButton'
import SuccessMsg from './SuccessMsg'
import { fakeApiRequest, validateForm } from './helpers'
import { DEFAULT_VALUES, formStateReducer, ACTIONS } from './hooks'

const Form = () => {
  const [ state, dispatch ] = useReducer(formStateReducer, DEFAULT_VALUES)
  
  const defaultValues = survey.reduce((acc, item) => ({...acc, [item.id]: ''}), {})
  const [ formValues, setFormValues ] = useState(defaultValues)
  
  const onSubmit = async e => {
    e.preventDefault()

    const errors = validateForm(survey, formValues)
    if (Object.keys(errors).length) {
      return dispatch({ type: ACTIONS.errors, payload: errors })
    }
    
    dispatch({ type: ACTIONS.submit })

    await fakeApiRequest(formValues)
    
    dispatch({ type: ACTIONS.submitSuccess })
  }

  const setFieldValue = (id, userValue) => {
    setFormValues({
      ...formValues,
      [id]: userValue
    })
  }

  if (state.submitSuccess) {
    return <SuccessMsg />
  }

  return (
    <form onSubmit={onSubmit}>
      { survey.map(srv => {
        return (
          <Field
            errors={state.errors}
            key={srv.id}
            value={formValues[srv.id]}
            setFieldValue={setFieldValue}
            {...srv} 
          />
        )
      }) }

      <SubmitButton isSubmitting={state.submit} />
    </form>
  )
}

export default Form