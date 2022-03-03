import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <div>
      <Link to="/">首頁</Link>

      <Link to="/product-category">巢狀路由</Link>

      <Link to="/admin">會員中心</Link>

      <Link to="/order-steps/cart">購物車</Link>

      <Link to="/product-list">產品清單(URL Params)</Link>

      <Link to="/product-list-qs">產品清單(Query String)</Link>

      <Link to="/login">登入</Link>
    </div>
  );
}

Menu.propTypes = {};

export default Menu;
