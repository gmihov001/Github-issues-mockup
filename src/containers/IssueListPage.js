import React from 'react';
import './IssueListPage.css';

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
                <strong>npm start is not working</strong>
                <br/>
                #9208 opened 2 hours ago by Easyvipin
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
