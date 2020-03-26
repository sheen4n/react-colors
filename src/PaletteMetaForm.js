import React, { useState, useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import { Context as PaletteContext } from './context/PaletteContext';

import { Context as NewPaletteFormContext } from './context/NewPaletteFormContext';
import { withRouter } from 'react-router-dom';

const PaletteMetaForm = ({ hideForm, history }) => {
  const [stage, setStage] = useState('form');

  const { addPalette, state: palettes } = useContext(PaletteContext);

  const {
    changeNewPaletteName,
    resetNewPaletteForm,
    state: newFormState
  } = useContext(NewPaletteFormContext);

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

  const { newPaletteName, newColors } = newFormState;

  const showEmojiPicker = () => setStage('emoji');

  const createNewPalette = emoji => {
    addPalette({
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: emoji.native,
      colors: newColors
    });
    resetNewPaletteForm();
    history.push('/');
  };

  return (
    <div>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker title="Pick a Palette Emoji" onSelect={createNewPalette} />
      </Dialog>
      <Dialog
        open={stage === 'form'}
        aria-labelledby="form-dialog-title"
        onClose={hideForm}
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique!
            </DialogContentText>

            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              name="newPaletteName"
              onChange={e => changeNewPaletteName(e.target.value)}
              fullWidth
              margin="normal"
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};

export default withRouter(PaletteMetaForm);
