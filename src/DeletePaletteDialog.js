import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';

import CheckIcon from '@material-ui/icons/Check';

const DeletePaletteDialog = ({ open, closeDialog, handleDelete }) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="delete-dialog-title"
      onClose={closeDialog}
    >
      <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
      <List>
        <ListItem button onClick={handleDelete}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
              <CheckIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Delete" />
        </ListItem>
        <ListItem button onClick={closeDialog}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
              <CloseIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Cancel" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default DeletePaletteDialog;
