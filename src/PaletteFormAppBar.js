import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH } from './config/ui-variables';

import './styles/PaletteFormAppBar.css';

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  }
}));

const PaletteFormAppBar = ({ children, setDrawerOpen, drawerOpen }) => {
  const classes = useStyles();

  const handleDrawerOpen = () => setDrawerOpen(true);

  return (
    <AppBar
      position="fixed"
      color="default"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen
      })}
    >
      <Toolbar className="PaletteFormAppBar-toolbar">
        {!drawerOpen && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, drawerOpen && classes.hide)}
          >
            <AddToPhotosIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap>
          Create Palette
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default PaletteFormAppBar;
