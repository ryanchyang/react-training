import { useState } from 'react';

function Form() {
  const [inputText, setInputText] = useState('');
  const [textarea, setTextarea] = useState('');

  const [radio, setRadio] = useState('');
  const [select, setSelect] = useState('');

  // single checkbox - agree
  const [agree, setAgree] = useState(false);
  // checkbox group
  const [likeList, setLikeList] = useState([]);
  const fruitOptions = ['西瓜', '芒果', '芭樂'];

  const radioArr = [
    'Miles',
    '序收',
    'Daniel',
    '勝收',
    'Xisharp Teng',
    '鄧西夏',
  ];

  const radioJSX = function () {
    return radioArr.map((v, i) => {
      return (
        <div key={i}>
          <input
            type="radio"
            value={v}
            id={'foodOption' + i}
            checked={v === radio}
            onChange={e => {
              setRadio(e.target.value);
            }}
          />
          <label htmlFor={'foodOption' + i}>{v}</label>
        </div>
      );
    });
  };

  const selectJSX = function () {
    return (
      <>
        <label htmlFor="cars">選擇車子:</label>
        <select
          name="cars"
          id="cars"
          value={select}
          onChange={e => {
            setSelect(e.target.value);
          }}
        >
          {' '}
          <option value="">請選擇</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </>
    );
  };

  return (
    <>
      <h1>可控的表單元素</h1>
      <h2>文字輸入框</h2>
      <input value={inputText} onChange={e => setInputText(e.target.value)} />
      <h2>文字輸入區域</h2>
      <textarea value={textarea} onChange={e => setTextarea(e.target.value)} />
      <h2>選項按鈕(群組)</h2>
      {radioJSX()}
      <h2>下拉清單</h2>
      {selectJSX()}
      <h2>核取方塊(單一)</h2>
      <input
        type="checkbox"
        checked={agree}
        onChange={e => {
          setAgree(e.target.checked);
        }}
      />
      <h2>核取方塊(群組)</h2>
      <p>選擇你喜歡的水果</p>
      {fruitOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              value={v}
              checked={likeList.includes(v)}
              onChange={e => {
                //先判斷是否有在狀態陣列中
                const inState = likeList.includes(e.target.value);

                if (inState) {
                  //if 在陣列中 -> 移除
                  const newLikeList = likeList.filter(
                    (v, i) => v !== e.target.value
                  );
                  setLikeList(newLikeList);
                } else {
                  //else  -> 加入陣列
                  const newLikeList = [...likeList, e.target.value];
                  setLikeList(newLikeList);
                }
              }}
            />
            <label>{v}</label>
          </div>
        );
      })}
    </>
  );
}

export default Form;
