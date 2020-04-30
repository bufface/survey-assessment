export const DEFAULT_VALUES = {
  submit: false,
  errors: null,
  submitSuccess: false
}

export const ACTIONS = {
  submit: 'SUBMIT',
  errors: 'ERRORS',
  submitSuccess: 'SUMBIT_SUCCESS'
}

export const formStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.submit:
      return { ...state, submit: true }
    case ACTIONS.errors:
      return { ...state, errors: action.payload }
    case ACTIONS.submitSuccess:
      return { ...DEFAULT_VALUES, submitSuccess: true }
    default:
      throw Error('No action specified')
  }
}