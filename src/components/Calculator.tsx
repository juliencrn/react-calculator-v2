import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import theme from '../theme'
import bg from '../assets/math-bg.jpeg'
import Keyboard from './Keyboard'
import Display from './Display'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0
  },
  paper: {
    margin: 'auto',
    borderRadius: theme.touch.size / 2,
    padding: spacing(1)
  }
}))

const Calculator: React.FC = () => {
  const classes = useStyles({})
  const [display, setDisplay] = useState('0')

  function handleClick(symbol: string): void {
    console.log({ symbol })
    setDisplay(symbol)
  }

  return (
    <div className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <Display display={display} />
        <Keyboard handleClick={(symbol: string) => handleClick(symbol)} />
      </Paper>
    </div>
  )
}

export default Calculator
