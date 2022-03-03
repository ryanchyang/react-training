import JQueryTest from './components/JQueryTest';
import JQueryTest2 from './components/JQueryTest2';
import BootstrapTest from './components/BootstrapTest';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ProductDetailQS from './pages/ProductDetailQS';
import ProductListQS from './pages/ProductListQS';
import MLBreadcrumb from './components/MLBreadcrumb';
import OrderIndex from './pages/Order/OrderIndex';
import OrderSteps from './pages/Order2/OrderSteps';
import AdminIndex from './pages/Admin/AdminIndex';
import ProductCategory from './pages/ProductNested/ProductCategory';

import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <Router>
      <>
        {/* 選單 */}
        <Menu />
        <MLBreadcrumb />
        {/* 路由表 */}
        <Switch>
          <Route path="/product-category">
            <ProductCategory />
          </Route>
          <Route path="/admin/:stepType?">
            <AdminIndex />
          </Route>
          <Route path="/order">
            <OrderIndex />
          </Route>
          <Route path="/order-steps/:stepType">
            <OrderSteps />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/about/contact">
            <Contact />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/product-list-qs">
            <ProductListQS />
          </Route>
          <Route path="/product-detail-qs">
            <ProductDetailQS />
          </Route>
          <Route exact path="/product-list">
            <ProductList />
          </Route>
          <Route path="/product-list/product-detail/:id?">
            <ProductDetail />
          </Route>
          {/* 網址上的動態參數params */}
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
