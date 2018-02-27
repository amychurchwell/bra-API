import React from 'react';
import { fetchBrand } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function BrandSearch({ dispatch }){
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        } else {
          dispatch(fetchBrand(input.value.trim()));
        }
        return;
        // ...we'll add more custom logic here later...
        console.log('SEARCHED TITLE:');
        console.log(input.value.trim());
        //...instead of these console.log()s....
        input.value = '';
      }}>
        <input placeholder="Brand Name" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

BrandSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(BrandSearch);
