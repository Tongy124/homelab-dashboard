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
            <li>PfSense</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <ul className="monitoring">
            <li>PiAlert</li>
            <li>NetData</li>
            <li>SmokePing</li>
            <li>Portainer</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <ul className="uncategorized">
            <li>Pterodactyl</li>
            <li>Jellyfin</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;