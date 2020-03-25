import React from 'react';
import './styles/DraggableColorBox.css';
import DeleteIcon from '@material-ui/icons/Delete';

const DraggableColorBox = ({ color, name, showFull }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`DraggableColorBox ${showFull && 'showFull'}`}
    >
      <div className='box-content'>
        <span>{name}</span>
        <DeleteIcon className='delete-icon' />
      </div>
    </div>
  );
};

export default DraggableColorBox;
