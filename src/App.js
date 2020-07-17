import React, { useEffect } from 'react';


// styles
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Dropzone from './components/Dropzone'

function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (
    <div className="App container center">
      <p className="flow-text">Dopzones</p>
      <Dropzone />
    </div>
  );
}

export default App;
