import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Imports
import Home from '../Home/Home'
import Navbar from '../../components/Navbar/Navbar';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

