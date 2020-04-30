import React from 'react'

const SubmitButton = ({ isSubmitting }) => {
  const cssClass = isSubmitting && 'is-loading'

  return (
    <div className="field">
      <div className="control">
        <button type="submit" className={`button is-small ${cssClass}`}>
          Submit <span role="img" aria-label="emoji">🚀</span>
        </button>
      </div>
    </div>
  )
}

export default SubmitButton