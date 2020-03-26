import React, { useContext, useEffect, useState } from 'react';
import MiniPalette from './MiniPalette';

import { withRouter, Link } from 'react-router-dom';

import './styles/PaletteList.css';

import { Context } from './context/PaletteContext';
import DeletePaletteDialog from './DeletePaletteDialog';

const PaletteList = ({ history }) => {
  const { removePalette, state: palettes } = useContext(Context);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const closeDialog = () => setOpenDeleteDialog(false);

  const goToPalette = id => () => history.push(`/palette/${id}`);

  const openDialog = id => e => {
    e.stopPropagation();
    setOpenDeleteDialog(true);
    setDeleteId(id);
  };

  const handleDeletePalette = () => {
    removePalette(deleteId);
    setDeleteId('');
    setOpenDeleteDialog(false);
  };

  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  return (
    <div className="PaletteList">
      <div className="PaletteList-container">
        <nav className="PaletteList-header">
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>

        <div className="PaletteList-palettes-container">
          {palettes.map(palette => (
            <MiniPalette
              {...palette}
              goToPalette={goToPalette(palette.id)}
              key={palette.id}
              removePalette={openDialog(palette.id)}
            />
          ))}
        </div>
      </div>
      <DeletePaletteDialog
        open={openDeleteDialog}
        closeDialog={closeDialog}
        handleDelete={handleDeletePalette}
      />
    </div>
  );
};

export default withRouter(PaletteList);
