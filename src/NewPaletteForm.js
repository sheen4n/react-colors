import React, { useState, useContext } from 'react';
import PaletteDrawer from './PaletteDrawer';
import PaletteColorPicker from './PaletteColorPicker';
import { withRouter } from 'react-router-dom';
import PaletteFormContent from './PaletteFormContent';
import './styles/NewPaletteForm.css';
import DraggableColorBox from './DraggableColorBox';

import CssBaseline from '@material-ui/core/CssBaseline';
import PaletteFormAppBar from './PaletteFormAppBar';
import { Button } from '@material-ui/core';

import { Context } from './context/PaletteContext';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const NewPaletteForm = ({ history }) => {
  const { addPalette, state: palettes } = useContext(Context);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newColor, setNewColor] = useState('teal');
  const [newColors, setNewColors] = useState([]);
  const [newColorName, setNewColorName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');

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

    setNewColors([...newColors, newColorObject]);
    resetForm();
  };

  const resetForm = () => {
    setNewColorName('');
    setNewColor('');
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
      newColors
    });
    history.push('/');
  };

  const removeColor = color => () =>
    setNewColors([...newColors.filter(c => c.color !== color)]);

  return (
    <div className='NewPaletteForm'>
      <CssBaseline />

      <PaletteFormAppBar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <ValidatorForm onSubmit={createNewPalette}>
          <TextValidator
            label='Palette Name'
            value={newPaletteName}
            onChange={e => setNewPaletteName(e.target.value)}
          />
          <Button variant='contained' color='primary' type='submit'>
            Save Palette
          </Button>
        </ValidatorForm>
      </PaletteFormAppBar>

      <PaletteDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <PaletteColorPicker
          newColor={newColor}
          setNewColor={setNewColor}
          addNew={handleAddNewColor}
          newColorName={newColorName}
          setNewColorName={setNewColorName}
          errorMessage={errorMessage}
        />
      </PaletteDrawer>
      <PaletteFormContent drawerOpen={drawerOpen}>
        {newColors.map(({ color, name }) => (
          <DraggableColorBox
            color={color}
            name={name}
            showFull={true}
            removeColor={removeColor(color)}
          />
        ))}
      </PaletteFormContent>
    </div>
  );
};

export default withRouter(NewPaletteForm);
