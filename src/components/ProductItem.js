function ProductItem(props) {
  // 每個商品物件
  //    {
  //        id:1,
  //        name: '咖啡色 T-shirt',
  //        categroy:'Shirt',
  //        image:'https://i.imgur.com/1GrakTl.jpg',
  //        price:300
  //    }

  const {
    id,
    name,
    categroy,
    image,
    price,
    count,
    setCount,
    products,
    setProductsValue,
    counts,
    setCounts,
  } = props;

  const deleteHandler = id => {
    console.log(products);

    const newArr = products.filter(obj => id !== obj.id);
    const index = products.findIndex(obj => id === obj.id);
    setProductsValue(newArr);
    const newCounts = [...counts];
    newCounts.splice(index, 1);
    setCounts(newCounts);
  };
  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img alt="" className="img-fluid" src={image} />
          </div>
          <div className="col">
            <div className="row text-muted">{categroy}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                if (count - 1 >= 1) setCount(count - 1);
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {count}
            </a>
            <a
              href="#/"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            ${price}{' '}
            <span className="close" onClick={() => deleteHandler(id)}>
              &#10005;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
