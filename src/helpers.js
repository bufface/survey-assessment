export const fakeApiRequest = (data) => new Promise(resolve => {
  return setTimeout(() => resolve({
    status: 200,
    msg: 'ok',
    data
  }), 1500)
})

const validators = {
  required: (val) => !val && 'Required field',
  number: (val) => (!val || !(/^\d+$/.test(val))) && 'Must be a number',
  string: (val) => {
    const tmp = val.trim()
    if (!tmp || typeof val !== 'string') {
      return 'Must be a string'
    }
  }
}

export const validateForm = (input, values) => {
  let errors = {}

  const jsonValidators = input.reduce((acc, field) => ({
    ...acc,
    [field.id]: field.validators
  }), {})
  
  Object.entries(values).map(([ id, value ]) => {
    const message = jsonValidators[id] && jsonValidators[id]
      .map(type => validators[type](value))
      .filter(hasFailed => hasFailed)
    
    if (message && message.length) {
      errors[id] = message 
    }
    
    return null
  });

  return errors
}