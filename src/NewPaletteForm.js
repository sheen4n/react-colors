import React, { useState, useContext } from 'react';
import PaletteDrawer from './PaletteDrawer';
import PaletteColorPicker from './PaletteColorPicker';
import { withRouter, Link } from 'react-router-dom';
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
    changeNewPaletteName,
    changeColorsSequence,
    state: newFormState
  } = useContext(NewPaletteFormContext);

  const { newColors, newPaletteName } = newFormState;

  const [drawerOpen, setDrawerOpen] = useState(false);

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
    <div className="NewPaletteForm">
      <CssBaseline />

      <PaletteFormAppBar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <ValidatorForm onSubmit={createNewPalette}>
          <TextValidator
            label="Palette Name"
            value={newPaletteName}
            onChange={e => changeNewPaletteName(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </ValidatorForm>
      </PaletteFormAppBar>

      <PaletteDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <PaletteColorPicker />
      </PaletteDrawer>
      <PaletteFormContent drawerOpen={drawerOpen}>
        <DraggableColorList axis="xy" onSortEnd={onSortEnd} />
      </PaletteFormContent>
    </div>
  );
};

export default withRouter(NewPaletteForm);
