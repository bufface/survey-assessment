import React from 'react'

const Field = (props) => {
  const renderInput = () => {
    switch (props.type) {
      case 'radio':
        return props.values.map(val => (
          <label key={val} className={ props.type }>
            <input
              onChange={() => props.setFieldValue(props.id, val)}
              type={ props.type }
              name={ props.id}
            />
            { val }
          </label>
        ))

      case 'select':
        return (
          <div className="select">
            <select value={ props.value } onChange={ e => props.setFieldValue(props.id, e.target.value) }>
              <option value="">Select</option>
              { props.values.map((val => (
                <option value={val} key={val}>{ val }</option>
              ))) }
            </select>
          </div>
        );

      default:
        return (
          <label className={ props.type }>
            <input
              onChange={(e) => props.setFieldValue(props.id, e.target.value)}
              className="input"
              type={ props.type }
            />
          </label>
        );
    }
  }

  const renderError = () => {
    if (!props.errors || !props.errors[props.id]) {
      return
    }

    return props.errors[props.id].map((err, idx) => (
      <p key={idx} className="help is-danger">* { err }</p>
    ))
  }

  return (
    <div className="field">
      <label className="label">
        { props.question }
      </label>
      <div className="control">
        { renderInput() }
        
        { renderError() }
      </div>
    </div>
  )
}

export default Field