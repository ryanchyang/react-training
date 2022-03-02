import React from 'react';

function FilterBar(props) {
  const { displayState, dispatch } = props;

  const resetHandler = () => {
    dispatch({
      type: 'RESET',
    });
  };

  const checkboxChangeHandler = e => {
    if (displayState.tags.includes(e.target.value)) {
      dispatch({
        type: 'TAGS',
        tags: displayState.tags.filter(tag => tag !== e.target.value),
      });
    } else {
      dispatch({
        type: 'TAGS',
        tags: [...displayState.tags, e.target.value],
      });
    }
  };
  return (
    <>
      <h2 className="grid-title">
        <i className="fa fa-filter"></i> 過濾
      </h2>
      <button className="btn btn-success" onClick={resetHandler}>
        重設
      </button>
      <hr />
      <h4>依標籤</h4>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value="大螢幕"
            checked={displayState.tags.some(tag => tag === '大螢幕')}
            onChange={e => checkboxChangeHandler(e)}
          />{' '}
          大螢幕
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value="小螢幕"
            checked={displayState.tags.some(tag => tag === '小螢幕')}
            onChange={e => checkboxChangeHandler(e)}
          />{' '}
          小螢幕
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value="蘋果"
            checked={displayState.tags.some(tag => tag === '蘋果')}
            onChange={e => checkboxChangeHandler(e)}
          />{' '}
          蘋果
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value="安卓"
            checked={displayState.tags.some(tag => tag === '安卓')}
            onChange={e => checkboxChangeHandler(e)}
          />{' '}
          安卓
        </label>
      </div>
      <div className="padding"></div>
    </>
  );
}

export default FilterBar;
