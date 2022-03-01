import React from 'react';
import ProductItem from './ProdItem';

function ProdList(props) {
  // console.log(props.products);
  const { products } = props;

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {products.map((product, i) => {
              return <ProductItem key={product.id} product={product} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProdList;
