import React from 'react';

import './App.css';
import Form from './Form'
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <h1 className="title"><span role="img" aria-label="emoji">📰</span> Survey!</h1>

          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
