import constants from "./../../src/constants";
import { createStore } from 'redux';
import rootReducer from './../../src/reducers/';
import brandReducer from './../../src/reducers/brandReducer';

import * as actions from './../../src/actions';

describe('Bra App', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('brandReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(brandReducer(initialState.brandsById, {
        type: null })).toEqual(initialState.brandsById);
    });
    it('Should update state when API brand is being requested.', () => {
      const action = actions.requestBrand('freya');
      const newStateEntry = {
        isFetching: true,
        brand: action.brand,
        brandId: action.brandId,
      };
      expect(brandReducer(initialState.brandsById, action)[action.brandId].toEqual(newStateEntry));
    });
  });
});
