import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Imports
import Home from '../Home/Home'
import Packages from "../Packages/Packages";

// Components
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <div className="App cont">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/packages">
            <Packages />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

