import React from 'react'
import Fab from '@material-ui/core/Fab'

import theme from '../theme'

const { touch } = theme

type Props = {
  id: string
  text: string
  large?: boolean
  style: any
  onClick: any
  active: boolean
}

const Touch: React.SFC<Props> = ({
  id,
  text,
  large = false,
  style,
  onClick,
  active
}) => {
  const largeCSS = large ? { width: (touch.size + touch.margin) * 2 } : {}
  const activeCSS = active
    ? {
        color: style.background,
        background: style.color
      }
    : {}

  const css: React.CSSProperties = {
    margin: touch.margin,
    width: touch.size,
    height: touch.size,
    ...style,
    ...largeCSS,
    ...activeCSS
  }

  return (
    <Fab
      id={id}
      style={css}
      variant={large ? 'extended' : 'round'}
      size={large ? 'large' : 'medium'}
      onClick={onClick}
    >
      {text}
    </Fab>
  )
}

export default Touch
