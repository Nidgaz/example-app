import React, { useState } from 'react';
import './styles.css';

import { Segment } from './containers/segment';
import data from './data/data.json';
import { Context } from './context';

function App() {
  const [rule, setRule] = useState('admin');

  const switchRule = () :void => {
    setRule(rule === 'admin' ? 'manager' : 'admin');
  }

  return (
    <Context.Provider value={rule}>
      <div className="container">
         <div className="container px-20 p-3">
            <div className="row">
              <button type="button" className="btn btn-primary col-2" onClick={switchRule}>switch rule</button>
              <div className="rule col-2">{rule.toUpperCase()}</div>
            </div>
          </div>
        <Segment data={data}/>
      </div>
    </Context.Provider>
  );
}

export default App;
