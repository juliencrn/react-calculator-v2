import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import theme from '../theme'
import Keyboard from './Keyboard'
import Display from './Display'
import useCalculator from '../hooks/useCalculator'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0
  },
  paper: {
    margin: 'auto',
    borderRadius: theme.touch.size / 2,
    padding: spacing(1),
    '& > *': {
      width: (theme.touch.size + theme.touch.margin * 2) * 4
    }
  }
}))

const Calculator: React.FC = () => {
  const classes = useStyles({})
  const [state, dispatch] = useCalculator()
  return (
    <div className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <Display display={state.current.toString()} />
        <Keyboard
          handleClick={(symbol: string) => dispatch(symbol)}
          activeSymbol={state.activeOperator}
        />
      </Paper>
    </div>
  )
}

export default Calculator
