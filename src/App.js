import logo from './logo.svg';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

import Header from './components/header/header';
import AllLinks from './components/all-links/all-links'


//Pages
import Home from './components/feature/home/home';
import Sancharam from './components/feature/Sancharam/Sancharam';
import Schedule from './components/feature/Schedule/Schedule';
import Episodes from './components/feature/Episodes/Episodes';
function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>
        <div className="pages">
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/sancharam">
              <Sancharam/>
            </Route>
            <Route path="/schedule">
              <Schedule/>
            </Route>
            <Route path="/episodes">
              <Episodes/>
            </Route>

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
        <div className="featured">
          <h1>നിങ്ങൾക്കും സഫാരിയുടെ പരിപാടികൾ സ്വന്തമാക്കാം </h1>
          <div className="featured-sections">
            <div className="featured-section featured__buy-dvd      no-scrollbar">
              <div className="featured-meta">
                <div className="featured-title"> Buy DVD</div>
               </div>
              <div className="featured-products">
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Sancharam VOL-7</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Irupatham Noottandu</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Sancharam VOL-6</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Freedom at Midnight</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Animal Kingdom</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Animal Kingdom</div>
                </div>
                
              </div>
            </div>
            <div className="featured-section featured__buy-dvd      no-scrollbar">
              <div className="featured-meta">Buy Books</div>
              <div className="featured-products">
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Sancharam VOL-7</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Irupatham Noottandu</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Sancharam VOL-6</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Freedom at Midnight</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Animal Kingdom</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Freedom at Midnight</div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
        <div className="footer">
          <AllLinks></AllLinks>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
