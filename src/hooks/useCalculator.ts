import { useReducer } from 'react'

import { execCalc, operators } from '../utils'

// todo : +/-
// todo : %
// todo : Quand on click sur diff operateur a la suite

export default function useCalculator() {
  const initialState = {
    current: 0,
    prev: 0,
    activeOperator: null,
    lastClicked: null,
    isFloat: false
  }

  const [states, dispatch] = useReducer((state, action) => {
    const { current, prev, activeOperator, lastClicked, isFloat } = state
    let tmp = 0
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
          tmp = execCalc(prev, current, activeOperator)
          return {
            ...state,
            current: tmp,
            prev: tmp,
            activeOperator: action === '=' ? null : action,
            lastClicked: action,
            isFloat: tmp
              .toString()
              .split('')
              .includes('.')
          }
        } else {
          // Arithmetic
          return {
            ...state,
            prev: current,
            activeOperator: action === '=' ? null : action,
            lastClicked: action,
            isFloat: false
          }
        }

      case '+/-':
        if (
          operators.includes(lastClicked) ||
          lastClicked === '=' ||
          current == '0'
        ) {
          return {
            ...state,
            lastClicked: action,
            current: '-'
          }
        } else {
          return {
            ...state,
            lastClicked: action,
            current: -current
          }
        }

      case '.':
        if (lastClicked === '.') {
          if (isFloat) {
            return state
          } else {
            return {
              ...state,
              current: `${current}${action}`,
              isFloat: true
            }
          }
        } else {
          if (isFloat) {
            return state
          } else {
            return {
              ...state,
              lastClicked: action,
              current: `${current}${action}`,
              isFloat: true
            }
          }
        }

      default:
        if (operators.includes(lastClicked)) {
          return {
            ...state,
            lastClicked: action,
            prev: current,
            current: action
          }
        } else if (lastClicked === '=') {
          return {
            ...state,
            lastClicked: action,
            prev: 0,
            current: action
          }
        } else {
          return {
            ...state,
            lastClicked: action,
            current: current == 0 ? action : `${current}${action}`
          }
        }
    }
  }, initialState)

  console.log(states)

  return [states, dispatch]
}
