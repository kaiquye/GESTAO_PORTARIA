import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import style from './index.module.css'
import AccessibilityIcon from '@material-ui/icons/Accessibility';



function MyAppBar() {

  return (
    <section>
      <AppBar position="static">
        <Toolbar className={style.background} >
          <IconButton edge="start" className={style.menuButton} color="inherit" aria-label="menu">
            <AccessibilityIcon />
          </IconButton>
          <Typography variant="h6" className={style.title}>
            PORTARIA GESTÂO
          </Typography>
          <Button className={style.button} color="inherit">Novo visitante</Button>
        </Toolbar>
      </AppBar>
    </section>
  )
}

export default MyAppBar;
