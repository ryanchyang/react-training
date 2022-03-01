import React from 'react';

function SortBar(props) {
  const { displayState, dispatch } = props;
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="btn-group">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={displayState.isSort}
              onChange={e => {
                dispatch({ type: 'SORT', isSort: e.target.value });
              }}
            >
              <option value="">預設排序 - 以ID排序</option>
              <option value="asc">以價格排序-由少至多</option>
              <option value="desc">以價格排序-由多至少</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default SortBar;
