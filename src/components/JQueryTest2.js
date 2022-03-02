import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';

function JQueryTest2(props) {
  const [total, setTotal] = useState(0);

  const buttonRef = useRef(null);
  const titleRef = useRef(null);
  const inputRef = useRef(null);

  // didMount
  useEffect(() => {
    // jquery code

    // //移除原事件
    // $(buttonRef.current).off('click');

    // // 加入新事件
    // $(buttonRef.current).on('click', () =>
    //   alert('Hello ' + $(titleRef.current).text() + ' 目前total狀態=' + total)
    // );

    // 加入新事件
    $(buttonRef.current).on('click', () => {
      alert('目前輸入值' + $(inputRef.current).val());
      setTotal(Number($(inputRef.current).val()));
    });
  }, []);

  return (
    <>
      <h1 ref={titleRef}>React</h1>
      {/* 不可控 */}
      <input type="text" ref={inputRef} defaultValue={total} />
      <button ref={buttonRef}>設定狀態</button>

      {/* <button ref={buttonRef}>Click me</button> */}
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div class="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
    </>
  );
}

export default JQueryTest2;
