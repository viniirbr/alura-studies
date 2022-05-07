import React from 'react';
import { Form } from './components/Form';
import { List } from './components/List';

function App() {
  return (
    <div className="App">
      <List list={[{name: "Dever", duration:3},{name: "Dever", duration:3}]}/>
    </div>
  );
}

export default App;
