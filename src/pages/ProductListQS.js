import React from 'react';
import { data } from '../data/phone';
import { Link } from 'react-router-dom';

function ProductList(props) {
  return (
    <>
      <h1>ProductList</h1>
      <ul>
        {data.map((v, i) => {
          return (
            <li key={i}>
              <Link to={`/product-detail-qs?id=${v.id}`}>{v.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductList;
