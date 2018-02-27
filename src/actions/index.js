import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestBrand = (brand, localBrandId) => ({
  type: types.REQUEST_BRAND,
  brand,
  brandId: localBrandId
});

export const receiveBrand = (brand, brandId) => ({
  type: types.RECEIVE_BRAND,
  brandId,
  brand,
  receivedAt: Date.now()
});

export const changeBrand = (newSelectedBrandId) => ({
  type: types.CHANGE_BRAND,
  newSelectedBrandId
});

export function fetchBrand(url, brand, localBrandId, dispatch) {
  return fetch('https://api.bratabase.com/brands/' + brand).then(
    response => response.json(),
    error => console.log('an error occurred', error)
  ).then(function(json) {
    if (json.body.name) {
      let name = json.body.name;
      name = name.replace('"', '');
      const brandArray = name.split(/\n/g).filter(entry => entry!='');
      dispatch(receiveBrand(url, brand, localBrandId, brandArray));
      dispatch(changeBrand(localBrandId));
    } else {
      console.log('Could not find! :(');
    }
  });
}

export function fetchBrandId(brand) {
  return function(dispatch) {
    const localBrandId = v4();
    dispatch(requestBrand(brand, localBrandId));
    return fetch('https://api.bratabase.com/brands/' + brand).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      if (json.body) {
        const url = json.body.bratabase_url;
        const brand = json.body.name;
        fetchBrand(brand, url, localBrandId, dispatch);
      } else {
        console.log('could not find!');
      }
    });
  };
}
