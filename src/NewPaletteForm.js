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
  const [colors, setNewColors] = useState([]);
  const [newName, setNewName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddNewColor = () => {
    const newColorObject = { color: newColor, name: newName };

    const isNameUnique = colors
      .map(c => c.name)
      .every(n => n.toLowerCase() !== newName.toLowerCase());
    const isColorUnique = colors.map(c => c.color).every(c => c !== newColor);
    if (newName.trim() === '') return setErrorMessage('Name is required');
    if (!isNameUnique) return setErrorMessage('New color name must be unique');
    if (!isColorUnique) return setErrorMessage('Color already used!');

    setNewColors([...colors, newColorObject]);
    resetForm();
  };

  const resetForm = () => {
    setNewName('');
    setNewColor('');
  };
  return (
    <div className='NewPaletteForm'>
      <PaletteDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}>
        <PaletteColorPicker
          newColor={newColor}
          setNewColor={setNewColor}
          addNew={handleAddNewColor}
          newName={newName}
          setNewName={setNewName}
          errorMessage={errorMessage}
        />
      </PaletteDrawer>
      <PaletteFormContent drawerOpen={drawerOpen}>
        {colors.map(({ color, name }) => (
          <DraggableColorBox color={color} name={name} showFull={true} />
        ))}
      </PaletteFormContent>
    </div>
  );
};

export default withRouter(NewPaletteForm);
