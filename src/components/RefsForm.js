import React, { useRef } from 'react';

function RefsForm(props) {
  const inputEl = useRef();

  return (
    <>
      <h2>Refs Form</h2>
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          inputEl.current.focus();
        }}
      >
        Click me(focus)
      </button>
      <button
        onClick={() => {
          inputEl.current.blur();
        }}
      >
        Click me(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputEl.current.value);
        }}
      >
        Click me(get value)
      </button>
    </>
  );
}

export default RefsForm;
