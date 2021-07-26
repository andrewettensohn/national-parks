import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@material-ui/core';
import { AppBarHeader } from './components/AppBarHeader';
import { ParkSearch } from './components/ParkSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  require('dotenv').config()

  return (
    <div className="App">
      <AppBarHeader />
      <Box mt={10}>
        <Container maxWidth="sm">
          <Router>
            <Switch>
              <Route path="/">
                <ParkSearch />
              </Route>
            </Switch>
          </Router>
        </Container>
      </Box>
    </div>
  );
}