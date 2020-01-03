import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'

import theme from '../theme'

const { touch } = theme

const useStyles = makeStyles(() => ({
  button: {
    margin: touch.margin,
    width: touch.size,
    height: touch.size
  }
}))

type Props = {
  text: string
  double?: boolean
  style: any
  onClick: any
}

export default function Touch({ text, double = false, style, onClick }: Props) {
  const classes = useStyles({})
  const conditionalCSS = double
    ? { width: (touch.size + touch.margin) * 2 }
    : {}
  return (
    <Fab
      className={classes.button}
      style={{ ...style, ...conditionalCSS }}
      variant={double ? 'extended' : 'round'}
      size={double ? 'large' : 'medium'}
      onClick={onClick}
    >
      {text}
    </Fab>
  )
}
