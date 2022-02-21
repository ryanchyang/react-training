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

function App() {
  const dataArray = data.map((obj) => {
    return <li key={obj.id}>{obj.name}</li>;
  });
  console.log(dataArray);

  return (
    <>
      <ul>
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>;
        })}
      </ul>
      <FC />
      <Parent />
      <SocialShare url="http://localhost:3000" round={true} />
      <List />
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
