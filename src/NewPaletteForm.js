import React, { useState } from 'react';
import PaletteDrawer from './PaletteDrawer';
import PaletteColorPicker from './PaletteColorPicker';
import { withRouter } from 'react-router-dom';
import PaletteFormContent from './PaletteFormContent';
import './styles/NewPaletteForm.css';

const NewPaletteForm = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newColor, setNewColor] = useState('teal');
  const [colors, setNewColors] = useState([]);

  const handleAddNewColor = () => setNewColors([...colors, newColor]);

  return (
    <div className='NewPaletteForm'>
      <PaletteDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <PaletteColorPicker
          newColor={newColor}
          setNewColor={setNewColor}
          addNew={handleAddNewColor}
        />
      </PaletteDrawer>
      <PaletteFormContent drawerOpen={drawerOpen}>
        {colors.map(color => (
          <h1>{color}</h1>
        ))}
      </PaletteFormContent>
    </div>
  );
};

export default withRouter(NewPaletteForm);
