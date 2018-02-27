import constants from './../constants';
const { initialState, types } = constants;

const brandReducer = (state = initialState.brandsById, action) => {
  let newBrandByIdEntry;
  let newBrandByIdStateSlice;
  switch (action.type) {
    case types.REQUEST_BRAND:
      newBrandByIdEntry = {
        isFetching: true,
        brand: action.brand,
        brandId: action.brandId
      };
      newBrandByIdStateSlice = Object.assign({}, state, {
        [action.brandId]: newBrandByIdEntry
      });
      return newBrandByIdStateSlice;
    case types.RECEIVE_BRAND:
    newBrandByIdEntry = Object.assign({}, state[action.songId], {
      isFetching: false,
      receivedAt: action.receivedAt,
      brand: action.brand,
      url: action.url,
      brandArray: action.brandArray,
      arrayPosition: 0,
      brandId: action.brandId
    });
    newBrandByIdStateSlice = Object.assign({}, state, {
      [action.brandId]: newBrandByIdEntry
    });
    return newBrandByIdStateSlice;
  default:
    return state;
  }
};

export default brandReducer;
