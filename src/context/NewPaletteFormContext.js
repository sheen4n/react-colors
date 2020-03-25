import createDataContext from './createDataContext';
const arrayMove = require('array-move');

const INITIAL_COLORS = [
  { name: 'red', color: '#F44336' },
  { name: 'pink', color: '#E91E63' },
  { name: 'purple', color: '#9C27B0' },
  { name: 'deeppurple', color: '#673AB7' },
  { name: 'indigo', color: '#3F51B5' },
  { name: 'blue', color: '#2196F3' },
  { name: 'lightblue', color: '#03A9F4' },
  { name: 'cyan', color: '#00BCD4' },
  { name: 'teal', color: '#009688' },
  { name: 'green', color: '#4CAF50' },
  { name: 'lightgreen', color: '#8BC34A' },
  { name: 'lime', color: '#CDDC39' },
  { name: 'yellow', color: '#FFEB3B' },
  { name: 'amber', color: '#FFC107' },
  { name: 'orange', color: '#FF9800' },
  { name: 'deeporange', color: '#FF5722' },
  { name: 'brown', color: '#795548' },
  { name: 'grey', color: '#9E9E9E' },
  { name: 'bluegrey', color: '#607D8B' }
];

const INITIAL_STATE = {
  newPaletteName: '',
  newColors: INITIAL_COLORS,
  newColorName: '',
  errorMessage: '',
  newColor: 'teal'
};

const newPaletteFormContext = (state, { type, payload }) => {
  switch (type) {
    case 'reset_form':
      return INITIAL_COLORS;
    case 'change_new_palette_name':
      return { ...state, newPaletteName: payload };

    case 'change_new_color_name':
      return { ...state, newColorName: payload };

    case 'add_color_to_new_palette':
      return { ...state, newColors: [...state.newColors, payload] };
    case 'remove_new_color':
      return {
        ...state,
        newColors: [
          ...state.newColors.filter(
            c => c.name.toLowerCase() !== payload.toLowerCase()
          )
        ]
      };

    case 'change_colors_sequence':
      return {
        ...state,
        newColors: arrayMove(
          state.newColors,
          payload.oldIndex,
          payload.newIndex
        )
      };
    case 'change_new_color':
      return { ...state, newColor: payload };

    case 'set_error_message':
      return { ...state, errorMessage: payload };

    case 'clear_colors':
      return { ...state, newColors: [] };

    default:
      return state;
  }
};

const changeNewPaletteName = dispatch => newPaletteName => {
  dispatch({ type: 'change_new_palette_name', payload: newPaletteName });
};

const changeNewColorName = dispatch => name => {
  dispatch({ type: 'change_new_color_name', payload: name });
};

const addColorToPalette = dispatch => newColor => {
  dispatch({ type: 'add_color_to_new_palette', payload: newColor });
};

const deleteColor = dispatch => name => {
  dispatch({ type: 'remove_new_color', payload: name });
};

const resetNewPaletteForm = dispatch => () => {
  dispatch({ type: 'reset_form' });
};

const changeNewColor = dispatch => color => {
  dispatch({ type: 'change_new_color', payload: color });
};

const setErrorMessage = dispatch => message => {
  dispatch({ type: 'set_error_message', payload: message });
};

const changeColorsSequence = dispatch => (oldIndex, newIndex) => {
  dispatch({ type: 'change_colors_sequence', payload: { oldIndex, newIndex } });
};

const clearColors = dispatch => () => {
  dispatch({ type: 'clear_colors' });
};

export const { Context, Provider } = createDataContext(
  newPaletteFormContext,
  {
    deleteColor,
    resetNewPaletteForm,
    changeNewColor,
    setErrorMessage,
    addColorToPalette,
    changeNewPaletteName,
    changeNewColorName,
    changeColorsSequence,
    clearColors
  },
  INITIAL_STATE
);
