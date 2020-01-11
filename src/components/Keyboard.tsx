import React from 'react'

import Touch from './Touch'
import touchList from '../utils/touchList'

type Props = {
  handleClick: any
  activeSymbol?: string
}

const Keyboard: React.SFC<Props> = ({ handleClick, activeSymbol }) => (
  <div>
    {touchList.map(touch => (
      <Touch
        key={touch.text}
        active={touch.text === activeSymbol}
        onClick={() => handleClick(touch.text)}
        {...touch}
      />
    ))}
  </div>
)

export default Keyboard
