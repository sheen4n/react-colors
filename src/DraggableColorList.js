import React, { useContext } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';
import { Context as NewPaletteFormContext } from './context/NewPaletteFormContext';

const DraggableColorList = () => {
  const { deleteColor, state: newFormState } = useContext(
    NewPaletteFormContext
  );

  const { newColors } = newFormState;

  return (
    <div style={{ height: '100%' }}>
      {newColors.map(({ color, name }, i) => (
        <DraggableColorBox
          color={color}
          name={name}
          removeColor={() => deleteColor(name)}
          key={name}
          index={i}
        />
      ))}
    </div>
  );
};

export default SortableContainer(DraggableColorList);
