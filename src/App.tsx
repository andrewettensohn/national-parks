import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@material-ui/core';
import { AppBarHeader } from './Components/AppBarHeader';
import { ParkSearch } from './Components/ParkSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {

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