import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { DRAWER_WIDTH } from './config/ui-variables';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0
  },
  drawerPaper: {
    width: DRAWER_WIDTH
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

const PaletteDrawer = ({ children, drawerOpen, setDrawerOpen }) => {
  const classes = useStyles();

  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={drawerOpen}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>

      <Divider />

      {children}
    </Drawer>
  );
};

export default PaletteDrawer;
