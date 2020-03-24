import React, { useState } from 'react';
import Slider from 'rc-slider';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import './Navbar.css';
import { MenuItem, IconButton, Snackbar, Select } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = ({ level, changeLevel, format, changeFormat, showSlider }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChangeSelect = e => {
    changeFormat(e);
    setSnackbarOpen(true);
  };

  return (
    <header className='Navbar'>
      <div className='logo'>
        <Link to='/'>ReactColorPicker</Link>
      </div>
      {showSlider && (
        <div className='slider-container'>
          <span>Level : {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}

      <div className='select-container'>
        <Select onChange={handleChangeSelect} value={format}>
          <MenuItem value='hex'>HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        message={
          <span id='message-id'>Format Changed To {format.toUpperCase()}</span>
        }
        ContentProps={{ 'aria-describedby': 'message-id' }}
        onClose={() => setSnackbarOpen(false)}
        action={[
          <IconButton
            onClick={() => setSnackbarOpen(false)}
            color='inherit'
            key='close'
          >
            <CloseIcon />
          </IconButton>
        ]}
      ></Snackbar>
    </header>
  );
};

export default Navbar;
