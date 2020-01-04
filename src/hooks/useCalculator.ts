import { useReducer } from 'react'

import { execCalc, operators } from '../utils'

export default function useCalculator() {
  const initialState = {
    current: 0,
    prev: 0,
    activeOperator: null,
    lastClicked: null
  }

  const [states, dispatch] = useReducer((state, action) => {
    const { current, prev, activeOperator, lastClicked } = state
    const tmp = 0
    switch (action) {
      case 'AC':
        return initialState
      case '+':
      case '-':
      case 'x':
      case '÷':
      case '=':
        if (activeOperator) {
          // calc
          return {
            ...state,
            current: execCalc(prev, current, activeOperator),
            prev: execCalc(prev, current, activeOperator),
            activeOperator: action === '=' ? null : action,
            lastClicked: action
          }
        } else {
          return {
            ...state,
            prev: current,
            activeOperator: action === '=' ? null : action,
            lastClicked: action
          }
        }

      default:
        if (operators.includes(lastClicked)) {
          return {
            ...state,
            lastClicked: action,
            prev: current,
            current: parseInt(action)
          }
        } else {
          return {
            ...state,
            lastClicked: parseInt(action),
            current:
              current === 0 ? parseInt(action) : parseInt(`${current}${action}`)
          }
        }
    }
  }, initialState)

  console.log(states)

  return [states, dispatch]
}
