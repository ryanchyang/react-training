import { useState } from 'react';
import './menu.css';

// 解答
// https://codesandbox.io/s/homework-1-array-1mm18

// https://codesandbox.io/s/homework-1-object-e0qytq

function List() {
  const [state, setState] = useState({
    home: false,
    about: false,
    prod: false,
  });

  const checkStatus = (event) => {
    if (state[event.target.id] === false) {
      event.target.className = 'active';
      setState((prev) => {
        return {
          ...prev,
          [event.target.id]: true,
        };
      });
    } else {
      event.target.className = '';
      setState((prev) => {
        return {
          ...prev,
          [event.target.id]: false,
        };
      });
    }
  };

  return (
    <ul>
      <li>
        <a href="#/" onClick={checkStatus} id="home">
          首頁
        </a>
      </li>
      <li>
        <a href="#/" onClick={checkStatus} id="about">
          關於我們
        </a>
      </li>
      <li>
        <a href="#/" onClick={checkStatus} id="prod">
          產品
        </a>
      </li>
    </ul>
  );
}

export default List;
