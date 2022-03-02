import JQueryTest from './components/JQueryTest';
import JQueryTest2 from './components/JQueryTest2';
import BootstrapTest from './components/BootstrapTest';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Member from './pages/Member';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Contact from './pages/Contact';

import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <Router>
      <>
        <h2>a href</h2>
        <a href="/">首頁</a>
        <br />
        <a href="/login">登入</a>
        <hr />
        <h2>Link to</h2>
        <Link to="/">首頁</Link>
        <br />
        <Link to="/login">登入</Link>
        <hr />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/about/contact">
            <Contact />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
