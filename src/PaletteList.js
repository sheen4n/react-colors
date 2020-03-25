import React from 'react';
import seedColors from './seedColors';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  },
  palette: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
};

const PaletteList = ({ classes, history }) => {
  const palettes = [...seedColors];

  const goToPalette = id => () => history.push(`/palette/${id}`);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palette}>
          {palettes.map(palette => (
            <MiniPalette
              {...palette}
              goToPalette={goToPalette(palette.id)}
              key={palette.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(PaletteList));
