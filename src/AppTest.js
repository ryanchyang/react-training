import React, { useState, useEffect, useReducer } from 'react';
import './App.scss';
import FilterBar from './components/FilterBar';
import ProdList from './components/ProdList';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';

import { data } from './data/phone';

const initDisplayState = {
  search: '',
  tags: [],
  isSort: '',
};

const displayStateReducer = (state, action) => {
  if (action.type === 'SEARCH') {
    return {
      search: action.search,
      tags: state.tags,
      isSort: state.isSort,
    };
  }
  if (action.type === 'SORT') {
    return {
      search: state.search,
      tags: state.tags,
      isSort: action.isSort,
    };
  }
  if (action.type === 'TAGS') {
    return {
      search: state.search,
      tags: action.tags,
      isSort: state.isSort,
    };
  }
  if (action.type === 'RESET') {
    return initDisplayState;
  }
};
function App() {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  const [displayState, dispatch] = useReducer(
    displayStateReducer,
    initDisplayState
  );

  useEffect(() => {
    let newProds = [...products];

    if (displayState.search !== '') {
      newProds = newProds.filter(prod => {
        const prodName = prod.name
          .split(' ')
          .map(name => name.toLowerCase())
          .join('');
        return prodName.includes(displayState.search.toLowerCase());
      });
    }

    if (displayState.isSort !== '') {
      if (displayState.isSort === 'asc') {
        newProds = newProds.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (displayState.isSort === 'desc') {
        newProds = newProds.sort((a, b) => {
          return b.price - a.price;
        });
      }
    }
    if (displayState.tags.length !== 0) {
      newProds = newProds.filter(prod =>
        displayState.tags.every(tag => prod.tags.split(',').includes(tag))
      );
    }

    setDisplayProducts(newProds);
  }, [displayState, products]);

  // const [tags, setTags] = useState([]);
  // const [searchWord, setSearchWord] = useState('');
  // const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    setProducts(data);
    setDisplayProducts(data);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <FilterBar
                      dispatch={dispatch}
                      displayState={displayState}
                    />
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    <SearchBar
                      dispatch={dispatch}
                      displayState={displayState}
                    />
                    <div className="padding"></div>
                    <SortBar dispatch={dispatch} displayState={displayState} />
                    <ProdList products={displayProducts} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
