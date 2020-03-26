import React, { useState, useContext } from 'react';
import PaletteDrawer from './PaletteDrawer';
import PaletteColorPicker from './PaletteColorPicker';
import { withRouter, Link } from 'react-router-dom';
import PaletteFormContent from './PaletteFormContent';
import './styles/NewPaletteForm.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import PaletteFormAppBar from './PaletteFormAppBar';
import { Button } from '@material-ui/core';

import { Context as NewPaletteFormContext } from './context/NewPaletteFormContext';

import DraggableColorList from './DraggableColorList';
import PaletteMetaForm from './PaletteMetaForm';

const NewPaletteForm = () => {
  const { changeColorsSequence } = useContext(NewPaletteFormContext);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    changeColorsSequence(oldIndex, newIndex);
  };

  const hideForm = () => setShowForm(false);
  const revealForm = () => setShowForm(true);

  return (
    <div className='NewPaletteForm'>
      <CssBaseline />

      <PaletteFormAppBar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <div className='NewPaletteForm-appbar button-group'>
          <Link to='/react-colors'>
            <Button variant='contained' color='secondary'>
              Go Back
            </Button>
          </Link>
          <Button variant='contained' color='primary' onClick={revealForm}>
            Save
          </Button>
        </div>

        {showForm && <PaletteMetaForm hideForm={hideForm} />}
      </PaletteFormAppBar>

      <PaletteDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <PaletteColorPicker />
      </PaletteDrawer>
      <PaletteFormContent drawerOpen={drawerOpen}>
        <DraggableColorList axis='xy' onSortEnd={onSortEnd} />
      </PaletteFormContent>
    </div>
  );
};

export default withRouter(NewPaletteForm);
