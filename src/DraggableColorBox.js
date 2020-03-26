import React from 'react';
import './styles/DraggableColorBox.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

const DraggableColorBox = ({ color, name, removeColor }) => {
  return (
    <div style={{ backgroundColor: color }} className={'DraggableColorBox'}>
      <div className="box-content">
        <span>{name}</span>
        <DeleteIcon className="delete-icon" onClick={removeColor} />
      </div>
    </div>
  );
};

export default SortableElement(DraggableColorBox);
