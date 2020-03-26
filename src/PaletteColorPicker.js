import React, { useContext } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';

import { Context as NewPaletteFormContext } from './context/NewPaletteFormContext';
import { Context as PaletteContext } from './context/PaletteContext';

import './styles/PaletteColorPicker.css';

const MAX_NEW_COLORS = 20;

const PaletteColorPicker = () => {
  const { state: palettes } = useContext(PaletteContext);
  const {
    addColorToPalette,
    changeNewColor,
    setErrorMessage,
    changeNewColorName,
    clearColors,
    state: newFormState
  } = useContext(NewPaletteFormContext);

  const { newColors, newColorName, newColor, errorMessage } = newFormState;

  const isPaletteFull = newColors.length >= MAX_NEW_COLORS;

  const handleAddNewColor = () => {
    const newColorObject = { color: newColor, name: newColorName };

    const isNameUnique = newColors
      .map(c => c.name)
      .every(n => n.toLowerCase() !== newColorName.toLowerCase());
    const isColorUnique = newColors
      .map(c => c.color)
      .every(c => c !== newColor);
    if (newColorName.trim() === '') return setErrorMessage('Name is required');
    if (!isNameUnique) return setErrorMessage('New color name must be unique');
    if (!isColorUnique) return setErrorMessage('Color already used!');

    addColorToPalette(newColorObject);
    resetForm();
  };

  const addRandomColor = () => {
    const allColors = palettes
      .map(p => p.colors)
      .flat()
      .filter(
        c =>
          !newColors.map(nc => nc.color).includes(c.color) &&
          !newColors.map(nc => nc.name).includes(c.name)
      );
    const rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    addColorToPalette(randomColor);
  };

  const resetForm = () => {
    changeNewColorName('');
    changeNewColor('');
  };

  return (
    <>
      <h2 className="PaletteColorPicker-header">Design Your Palette </h2>
      <div className="button-container">
        <Button color="secondary" variant="contained" onClick={clearColors}>
          CLEAR PALETTE
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={addRandomColor}
          disabled={isPaletteFull}
        >
          RANDOM COLOR
        </Button>
      </div>
      <ChromePicker
        color={newColor}
        onChangeComplete={c => changeNewColor(c.hex)}
      />

      <ValidatorForm onSubmit={handleAddNewColor}>
        <TextValidator
          label="Color Name"
          value={newColorName}
          onChange={e => changeNewColorName(e.target.value)}
        />
        {errorMessage && (
          <span style={{ color: 'red', display: 'block' }}>{errorMessage}</span>
        )}

        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: isPaletteFull ? 'Grey' : newColor }}
          type="submit"
          disabled={isPaletteFull}
        >
          {isPaletteFull ? 'PALETTE FULL' : 'ADD COLOR'}
        </Button>
      </ValidatorForm>
    </>
  );
};

export default PaletteColorPicker;
