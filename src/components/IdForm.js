import React from 'react';

function IdForm(props) {
  return (
    <>
      <h2>Id Form</h2>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.getElementById('my-input').focus();
        }}
      >
        Click me(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur();
        }}
      >
        Click me(blur)
      </button>
      <button
        onClick={() => {
          console.log(document.getElementById('my-input').value);
        }}
      >
        Click me(get value)
      </button>
    </>
  );
}

export default IdForm;
