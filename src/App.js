import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import Feed from './Feed';

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
        <Feed />
        {/*widgets */}
      </div>
    </div>
  );
}

export default App;
