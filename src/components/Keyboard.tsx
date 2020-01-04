import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Touch from './Touch'
import theme from '../theme'

const {
  common: { black, white },
  primary,
  grey
} = theme.palette

type TouchType = {
  id: string
  text: string
  style: any
  double?: boolean
}

const TouchList: Array<TouchType> = [
  { id: 'clear', text: 'AC', style: { color: black, background: grey[400] } },
  { id: '', text: '+/-', style: { color: black, background: grey[400] } },
  { id: '', text: '%', style: { color: black, background: grey[400] } },
  {
    id: 'divide',
    text: '÷',
    style: { color: white, background: primary.main }
  },
  { id: 'seven', text: '7', style: { color: white, background: grey[700] } },
  { id: 'eight', text: '8', style: { color: white, background: grey[700] } },
  { id: 'nine', text: '9', style: { color: white, background: grey[700] } },
  {
    id: 'multiply',
    text: 'x',
    style: { color: white, background: primary.main }
  },
  { id: 'four', text: '4', style: { color: white, background: grey[700] } },
  { id: 'five', text: '5', style: { color: white, background: grey[700] } },
  { id: 'six', text: '6', style: { color: white, background: grey[700] } },
  {
    id: 'subtract',
    text: '-',
    style: { color: white, background: primary.main }
  },
  { id: 'one', text: '1', style: { color: white, background: grey[700] } },
  { id: 'two', text: '2', style: { color: white, background: grey[700] } },
  { id: 'three', text: '3', style: { color: white, background: grey[700] } },
  { id: 'add', text: '+', style: { color: white, background: primary.main } },
  {
    id: 'zero',
    text: '0',
    style: { color: white, background: grey[700] },
    double: true
  },
  { id: 'decimal', text: '.', style: { color: white, background: grey[700] } },
  { id: 'equals', text: '=', style: { color: white, background: primary.main } }
]

const useStyles = makeStyles(() => ({
  grid: {
    width: (theme.touch.size + theme.touch.margin * 2) * 4
  }
}))

export default function Keyboard({ handleClick }: { handleClick: any }) {
  const classes = useStyles({})
  return (
    <div className={classes.grid}>
      {TouchList.map(touch => (
        <Touch
          key={touch.text}
          onClick={() => handleClick(touch.text)}
          {...touch}
        />
      ))}
    </div>
  )
}
