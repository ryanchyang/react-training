import React from 'react';
import { data } from '../data/phone';
import { Link, useLocation } from 'react-router-dom';

function ProductDetail(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  // 利用網址上的id參數找資料
  const product = data.find((v, i) => v.id === id);

  return (
    <>
      <h1>ProductDetail</h1>
      {/* 有找到資料才會呈現 */}
      {product && (
        <>
          <h2>{product.name}</h2>
          <img src={product.picture} alt="" />
          <p>{product.price}</p>
          <p>{product.tags}</p>
        </>
      )}
      <Link to="/product-list-qs">回產品清單</Link>
    </>
  );
}

export default ProductDetail;
