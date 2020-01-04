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
  id: string
  text: string
  large?: boolean
  style: any
  onClick: any
  active: boolean
}

function Touch({ id, text, large, style, onClick, active }: Props) {
  const classes = useStyles({})
  const largeCSS = large ? { width: (touch.size + touch.margin) * 2 } : {}
  const activeCSS = active
    ? {
        color: style.background,
        background: style.color
      }
    : {}

  const css: React.CSSProperties = {
    ...style,
    ...largeCSS,
    ...activeCSS
  }

  return (
    <Fab
      id={id}
      className={classes.button}
      style={css}
      variant={large ? 'extended' : 'round'}
      size={large ? 'large' : 'medium'}
      onClick={onClick}
    >
      {text}
    </Fab>
  )
}

Touch.defaultProps = {
  large: false
}

export default Touch
