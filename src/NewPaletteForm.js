import React, { useState, useContext } from 'react';
import PaletteDrawer from './PaletteDrawer';
import PaletteColorPicker from './PaletteColorPicker';
import { withRouter } from 'react-router-dom';
import PaletteFormContent from './PaletteFormContent';
import './styles/NewPaletteForm.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import PaletteFormAppBar from './PaletteFormAppBar';
import { Button } from '@material-ui/core';

import { Context as PaletteContext } from './context/PaletteContext';
import { Context as NewPaletteFormContext } from './context/NewPaletteFormContext';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import DraggableColorList from './DraggableColorList';

const NewPaletteForm = ({ history }) => {
  const { addPalette, state: palettes } = useContext(PaletteContext);
  const {
    addColorToPalette,
    changeNewColor,
    setErrorMessage,
    changeNewPaletteName,
    changeNewColorName,
    changeColorsSequence,
    state: newFormState
  } = useContext(NewPaletteFormContext);

  const {
    newColors,
    newColorName,
    newColor,
    errorMessage,
    newPaletteName
  } = newFormState;

  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const resetForm = () => {
    changeNewColorName('');
    changeNewColor('');
  };

  const createNewPalette = () => {
    const isNameUnique = palettes
      .map(p => p.paletteName)
      .every(n => n.toLowerCase() !== newPaletteName.toLowerCase());
    if (newPaletteName.trim() === '') return alert('Name is required');
    if (!isNameUnique) return alert('Name must be unique');

    addPalette({
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: '🎨',
      colors: newColors
    });
    history.push('/');
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    changeColorsSequence(oldIndex, newIndex);
  };

  return (
    <div className='NewPaletteForm'>
      <CssBaseline />

      <PaletteFormAppBar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <ValidatorForm onSubmit={createNewPalette}>
          <TextValidator
            label='Palette Name'
            value={newPaletteName}
            onChange={e => changeNewPaletteName(e.target.value)}
          />
          <Button variant='contained' color='primary' type='submit'>
            Save Palette
          </Button>
        </ValidatorForm>
      </PaletteFormAppBar>

      <PaletteDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <PaletteColorPicker
          newColor={newColor}
          setNewColor={changeNewColor}
          addNew={handleAddNewColor}
          newColorName={newColorName}
          setNewColorName={changeNewColorName}
          errorMessage={errorMessage}
        />
      </PaletteDrawer>
      <PaletteFormContent drawerOpen={drawerOpen}>
        <DraggableColorList axis='xy' onSortEnd={onSortEnd} />
      </PaletteFormContent>
    </div>
  );
};

export default withRouter(NewPaletteForm);
