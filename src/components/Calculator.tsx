import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import Touch from './Touch'
import theme from '../theme'
import bg from '../assets/math-bg.jpeg'
import Typography from '@material-ui/core/Typography'

const {
  common: { black, white },
  primary,
  grey
} = theme.palette

type TouchType = {
  text: string
  style: any
  double?: boolean
}

const TouchList: Array<TouchType> = [
  { text: 'AC', style: { color: black, background: grey[400] } },
  { text: '+/-', style: { color: black, background: grey[400] } },
  { text: '%', style: { color: black, background: grey[400] } },
  { text: '÷', style: { color: white, background: primary.main } },
  { text: '7', style: { color: white, background: grey[700] } },
  { text: '8', style: { color: white, background: grey[700] } },
  { text: '9', style: { color: white, background: grey[700] } },
  { text: 'x', style: { color: white, background: primary.main } },
  { text: '4', style: { color: white, background: grey[700] } },
  { text: '5', style: { color: white, background: grey[700] } },
  { text: '6', style: { color: white, background: grey[700] } },
  { text: '-', style: { color: white, background: primary.main } },
  { text: '1', style: { color: white, background: grey[700] } },
  { text: '2', style: { color: white, background: grey[700] } },
  { text: '3', style: { color: white, background: grey[700] } },
  { text: '+', style: { color: white, background: primary.main } },
  { text: '0', style: { color: white, background: grey[700] }, double: true },
  { text: ',', style: { color: white, background: grey[700] } },
  { text: '=', style: { color: white, background: primary.main } }
]

const useStyles = makeStyles(({ spacing, palette }) => ({
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
  },
  grid: { width: (theme.touch.size + theme.touch.margin * 2) * 4 },
  output: {
    color: palette.common.white,
    fontWeight: 400,
    padding: spacing(1)
  }
}))

const Calculator: React.FC = () => {
  const classes = useStyles({})

  function handleClick(symbol: string): void {
    console.log({ symbol })
  }

  return (
    <div className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <Typography className={classes.output} align="right" variant="h3">
          0
        </Typography>
        <div className={classes.grid}>
          {TouchList.map(touch => (
            <Touch
              key={touch.text}
              onClick={() => handleClick(touch.text)}
              {...touch}
            />
          ))}
        </div>
      </Paper>
    </div>
  )
}

export default Calculator
