import { useEffect, useState, useRef } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function FCLifecycle() {
  const [total, setTotal] = useState(0);
  const [didMount, setDidMount] = useState(false);
  const didMountRef = useRef(false);

  //要得到前一個total
  const prevTotal = usePrevious(total);

  // didMount
  useEffect(() => {
    console.log('didMount');
  }, []);

  // didUpdate + didMount
  useEffect(() => {
    console.log('didUpdate + didMount v1');
  }, [total]);

  // willUnmount
  useEffect(() => {
    return () => {
      console.log('willUnmount');
    };
  }, []);

  // -----

  // didUpdate(用初始值0判斷) 100% 模擬
  // 會回到初始值無法判斷出來
  useEffect(() => {
    // 用初始值0判斷
    if (total !== 0) console.log('didUpdate v2');
  }, [total]);

  //----

  // didMount時設置didMount旗標為true
  useEffect(() => {
    setDidMount(true);
  }, []);

  // didUpdate(用didMount旗標判斷) 100% 模擬
  useEffect(() => {
    // 用初始值0判斷
    if (didMount) console.log('didUpdate v3');
  }, [total]);

  //---

  // didUpdate(用didMountRef參照旗標判斷) 100% 模擬
  useEffect(() => {
    if (didMountRef.current) {
      // didUpdate
      console.log('didUpdate v4');

      // 得到前一個狀態值
      console.log('total=', total, ' previous total=', prevTotal);
    } else {
      didMountRef.current = true;
    }
  }, [total]);
  return (
    <>
      <h1
        onClick={() => {
          const newTotal = total + 1;
          setTotal(newTotal);
          console.log(newTotal);
        }}
      >
        {total}
      </h1>
      <button
        onClick={() => {
          const newTotal = total + 1;
          setTotal(prev => {
            console.log('previous total=', prev);
            return newTotal;
          });
          console.log(newTotal);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          const newTotal = total - 1;
          setTotal(newTotal);
          console.log(newTotal);
        }}
      >
        -
      </button>
    </>
  );
}

export default FCLifecycle;
