import logo from './logo.svg';
import './App.css';
// 導入一般的js物件檔
import { data } from './data/student';
// 導入json一樣會自動轉為js 物件
import students from './data/student.json';
import FC from './components/FC';
import Parent from './components/Parent';
import SocialShare from './components/SocialShare';
import List from './components/list';
import Hw2 from './components/Hw2';
import Cart from './components/Cart';
import './App.css';
import OrderList from './components/OrderList';
import Summary from './components/Summary';
import { useState } from 'react';

// 產品訂購的項目
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    id: 4,
    name: '金色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 100,
  },
];

// 初始化狀態用的函式
const initState = array => {
  const state = [];
  for (let i = 0; i < array.length; i++) {
    state.push(1);
  }
  return state;
};

function App() {
  // 多樣產品狀態：陣列
  // ex. 三樣商品 -> [1,1,1]
  // 下面兩種方式均可
  const [counts, setCounts] = useState(initState(products));
  //const [counts, setCounts] = useState(Array(products.length).fill(1))

  // Summary
  // 計算目前所有的商品數量
  const productCount = () => {
    let totalCount = 0;

    for (let i = 0; i < counts.length; i++) {
      totalCount += counts[i];
    }

    return totalCount;
  };

  // 計算目前所有的商品總價
  const total = () => {
    let sum = 0;

    for (let i = 0; i < products.length; i++) {
      sum += counts[i] * products[i].price;
    }

    return sum;
  };
  return (
    <>
      {/* <ul>
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>;
        })}
      </ul>
      <FC />
      <Parent />
      <SocialShare url="http://localhost:3000" round={true} />
      <List />
      <Hw2 /> */}
      <div className="card">
        <div className="row">
          <OrderList
            products={products}
            setCounts={setCounts}
            counts={counts}
          />
          <Summary productCount={productCount} total={total()} />
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  //     <h2>Number</h2>
  //     {123}
  //     {123 + 1}
  //     <h2>Boolean</h2>
  //     {true}
  //     {false}
  //     <h2>String</h2>
  //     {'abc'}
  //     {'abc' + 'de'}
  //     <h2>null/undefined</h2>
  //     {null}
  //     {undefined}
  //     <h2>Array</h2>
  //     {[1, 2, 'abc', true, null, undefined]}
  //     <h2>Object(錯誤)</h2>
  //     {/* 一般物件不能直接嵌入jsx中，會造成中斷錯誤 */}
  //     {/* {{ a: 1, b: 2 }} */}
  //     {/* {new Date()} */}
  //     <h2>Function(警告)</h2>
  //     {() => console.log(123)}
  //   </>
  // );
}

export default App;
