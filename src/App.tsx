import './App.css';
import { Box, Container } from '@material-ui/core';
import { AppBarHeader } from './components/AppBarHeader';
import { ParkSearch } from './components/ParkSearch/ParkSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { baseParkDetailsRoute } from './app/constants';
import { ParkDetails } from './components/ParkDetails/ParkDetails';

export default function App() {
  require('dotenv').config()

  return (
    <div className="App">
      <AppBarHeader />
      <Box mt={10}>
        <Container maxWidth="sm">
          <Router>
            <Switch>
              <Route exact path="/">
                <ParkSearch />
              </Route>
              <Route path={baseParkDetailsRoute}>
                <ParkDetails />
              </Route>
            </Switch>
          </Router>
        </Container>
      </Box>
    </div>
  );
}