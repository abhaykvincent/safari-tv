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
            <iframe class="_49_rs" title="Wix Chat" aria-label="Wix Chat" scrolling="no" src="https://engage.wixapps.net/chat-widget-server/renderChatWidget/index?pageId=masterPage&amp;compId=comp-jisk65v5&amp;viewerCompId=comp-jisk65v5&amp;siteRevision=231&amp;viewMode=site&amp;deviceType=desktop&amp;locale=en&amp;tz=America%2FToronto&amp;regionalLanguage=en&amp;width=94&amp;height=94&amp;instance=gI9zVzA5l6RZIS2vrtamRNY4-3Tpf2Jnw7nh0-eShWE.eyJpbnN0YW5jZUlkIjoiOTViNDQ1ODItZTQxNS00ZDUxLWEzNzAtYWIyYzFjNTU2MGYwIiwiYXBwRGVmSWQiOiIxNDUxN2UxYS0zZmYwLWFmOTgtNDA4ZS0yYmQ2OTUzYzM2YTIiLCJtZXRhU2l0ZUlkIjoiOTMxYzYzM2ItYWU5Ni00YTNjLTlmMTMtZTkyMDY1ZTJkNWNlIiwic2lnbkRhdGUiOiIyMDIxLTEwLTE4VDEyOjM5OjE3LjYwMFoiLCJkZW1vTW9kZSI6ZmFsc2UsIm9yaWdpbkluc3RhbmNlSWQiOiIxODdiMTI0ZC0wMGRiLTRkZWMtYTVkOS02MzZiZTBkNDUzZjEiLCJhaWQiOiI5NTVjZDVjOC01MDc3LTRhZTMtYWRhZi02MWRkODM4MTgwYzEiLCJiaVRva2VuIjoiMDZhODI2YjktNGE4My0wNzZkLTNjNjMtNDIwYzc5YjdiNTNlIiwic2l0ZU93bmVySWQiOiJhZjhkMDZhMS1lOGY3LTQxNzItODQ4OS04NDJiMTQyYjAxZWUifQ&amp;currency=CAD&amp;currentCurrency=CAD&amp;commonConfig=%7B%22brand%22%3A%22wix%22%2C%22bsi%22%3A%2232a62d2c-188e-4cf8-b67d-8e970f525bdc%7C1%22%2C%22BSI%22%3A%2232a62d2c-188e-4cf8-b67d-8e970f525bdc%7C1%22%7D&amp;vsi=e0d914d3-53de-43d7-96b3-6025a5ee677e" allowfullscreen="" allowtransparency="true" allowvr="true" frameborder="0" allow="autoplay;camera;microphone;geolocation;vr"></iframe>
            </Route>
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
                  <div className="product-buy button-yellow">Buy DVD</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Irupatham Noottandu</div>
                  <div className="product-buy button-yellow">Buy DVD</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Sancharam VOL-6</div>
                  <div className="product-buy button-yellow">Buy DVD</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Freedom at Midnight</div>
                  <div className="product-buy button-yellow">Buy DVD</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Animal Kingdom</div>
                  <div className="product-buy button-yellow">Buy DVD</div>
                </div>
                <div className="featured-product">
                  <div className="product-cover"></div>
                  <div className="product-meta">Animal Kingdom</div>
                  <div className="product-buy button-yellow">Buy DVD</div>
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
