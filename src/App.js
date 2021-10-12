import logo from './logo.svg';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

import Header from './components/all-links/header/header';
import AllLinks from './components/all-links/all-links'
function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>
        <div className="pages">
          <Switch>

            <Route exact path="/">
              <h1>
              SAFARI  TV
            </h1></Route>

            <Route path="/sancharam">
              <h1>
              Sancharam
            </h1></Route>
            <Route path="/schedule">
              <h1>
              Schedule
            </h1></Route>
            <Route path="/programs">
              <h1>
              Programs
            </h1></Route>

            <Route path="/buy/episode">
              <h1>
              Buy Episode
            </h1></Route>
            <Route path="/buy/dvd">
              <h1>
              Buy DVD
            </h1></Route>
            <Route path="/buy/books">
              <h1>
              Buy Books
            </h1></Route>

            <Route path="/cart">
              <h1>
              Cart
            </h1></Route>
            <Route path="/login">
              <h1>
              Login
            </h1></Route>
            <Route path="/signup">
              <h1>
              Signup
            </h1></Route>


          </Switch>
        </div>
        <div className="footer">

          <AllLinks></AllLinks>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
