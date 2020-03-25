import React, { useState } from 'react';
import PaletteDrawer from './PaletteDrawer';
import PaletteColorPicker from './PaletteColorPicker';
import { withRouter } from 'react-router-dom';
import PaletteFormContent from './PaletteFormContent';
import './styles/NewPaletteForm.css';
import DraggableColorBox from './DraggableColorBox';

const NewPaletteForm = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newColor, setNewColor] = useState('teal');
  const [colors, setNewColors] = useState(['purple', 'blue', 'red']);

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
          <DraggableColorBox color={color} showFull={true} />
        ))}
      </PaletteFormContent>
    </div>
  );
};

export default withRouter(NewPaletteForm);
