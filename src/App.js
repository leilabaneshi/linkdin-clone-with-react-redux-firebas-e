import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">

      {/*Header */}
      <Header />

      {/*app body */}
      <div className="app__body">


        {/*sidebar */}
        <Sidebar />

        {/*feed */}
        {/*widgets */}
      </div>
    </div>
  );
}

export default App;
