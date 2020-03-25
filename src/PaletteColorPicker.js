import React from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';

import './styles/PaletteColorPicker.css';

const PaletteColorPicker = ({
  newColor,
  setNewColor,
  newColorName,
  setNewColorName,
  addNew,
  errorMessage,
  clearColors,
  addRandomColor,
  isPaletteFull
}) => {
  return (
    <>
      <h2 className='PaletteColorPicker-header'>Design Your Palette </h2>
      <div className='button-container'>
        <Button color='secondary' variant='contained' onClick={clearColors}>
          CLEAR PALETTE
        </Button>
        <Button color='primary' variant='contained' onClick={addRandomColor}>
          RANDOM COLOR
        </Button>
      </div>
      <ChromePicker
        color={newColor}
        onChangeComplete={c => setNewColor(c.hex)}
      />

      <ValidatorForm onSubmit={addNew}>
        <TextValidator
          label='Color Name'
          value={newColorName}
          onChange={e => setNewColorName(e.target.value)}
        />
        {errorMessage && (
          <span style={{ color: 'red', display: 'block' }}>{errorMessage}</span>
        )}

        <Button
          variant='contained'
          color='primary'
          style={{ backgroundColor: isPaletteFull ? 'Grey' : newColor }}
          type='submit'
          disabled={isPaletteFull}
        >
          {isPaletteFull ? 'PALETTE FULL' : 'ADD COLOR'}
        </Button>
      </ValidatorForm>
    </>
  );
};

export default PaletteColorPicker;
