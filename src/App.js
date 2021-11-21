import * as React from 'react';
import ReactDOM from 'react-dom';

import { Grid, Typography, Box } from '@mui/material';

import './App.css';

let name = "Bruno"

function App() {
  return (
    <div className="App">

      <Box mt={15} ml={10}>
        <Grid container spacing={2} justify="left" >
          <Typography variant="h3">Good Afternoon, <b>{name}!</b></Typography>
        </Grid>
      </Box>

      <Box mt={5} ml={15}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4"><b>Networking</b></Typography>
            <ul className="networking">
              <li><b>PIHOLE</b></li>
              <li>PfSense</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h4"><b>Monitoring</b></Typography>
            <ul className="monitoring">
              <li>PiAlert</li>
              <li>NetData</li>
              <li>SmokePing</li>
              <li>Portainer</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h4"><b>Uncategorized</b></Typography>
            <ul className="uncategorized">
              <li>Pterodactyl</li>
              <li>Jellyfin</li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;