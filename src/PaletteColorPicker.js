import React from 'react';
import { ChromePicker } from 'react-color';
import './styles/PaletteColorPicker.css';
import { Button } from '@material-ui/core';

const PaletteColorPicker = ({ newColor, setNewColor, addNew }) => {
  return (
    <>
      <h2 className='PaletteColorPicker-header'>Design Your Palette </h2>
      <div className='button-container'>
        <Button color='secondary' variant='contained'>
          CLEAR PALETTE
        </Button>
        <Button color='primary' variant='contained'>
          RANDOM COLOR
        </Button>
      </div>
      <ChromePicker
        color={newColor}
        onChangeComplete={c => setNewColor(c.hex)}
      />

      <Button
        variant='contained'
        color='primary'
        style={{ backgroundColor: newColor }}
        onClick={addNew}
      >
        Add Color
      </Button>
    </>
  );
};

export default PaletteColorPicker;
