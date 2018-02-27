const brandList = {
  1: 'This is brand 1.',
  2: 'This is brand 2. :D'
};

export const initialState = {
  brandsById: {
    1: {
      brand: 'Brand name.',
      url: 'www.google.com',
      brandArray: brandList[1],
      arrayPosition: 0,
    },
    2: {
      brand: 'Bbbbbranddd',
      url: 'blah.com',
      brandArray: brandList[2],
      arrayPosition: 0,
    },
  }
};
