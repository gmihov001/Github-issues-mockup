import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="github-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="50px" />
      </header>
      <div className="App-body">
        <div className="issues-table">
            <div className="table-header">
                489 open / 5443 closed
            </div>
            <div className="table-entry">
                npm start is not working
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
