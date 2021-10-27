import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} md={6}>
          <ul className="networking">
            <li>PiHole</li>
            <li>PiAlert</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>Hello World</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;