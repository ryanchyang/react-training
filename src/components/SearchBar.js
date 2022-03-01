import React from 'react';

function SearchBar(props) {
  const { displayState, dispatch } = props;

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="以商品名稱搜尋"
          value={displayState.search}
          onChange={e => {
            dispatch({ type: 'SEARCH', search: e.target.value });
          }}
        />
      </div>
    </>
  );
}

export default SearchBar;
