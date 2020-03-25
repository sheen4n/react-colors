import createDataContext from './createDataContext';

import seedData from '../data/seedColors';

const paletteReducer = (state, action) => {
  switch (action.type) {
    case 'add_palette':
      return [...state, action.payload];

    default:
      return state;
  }
};

const addPalette = dispatch => () => {
  dispatch({ type: 'add_palette' });
};

export const { Context, Provider } = createDataContext(
  paletteReducer,
  { addPalette },
  seedData
);
