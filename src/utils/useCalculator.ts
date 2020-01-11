import { execCalc, toNumber, neoNum, isOperator } from './utils'
import { Operators, TouchText } from './touchList'

export interface States {
  current: neoNum
  prev: neoNum
  activeOperator: Operators
  lastClicked: TouchText
  isFloat: boolean
}

export function CalculatorReducer(
  state: States,
  action: TouchText,
  initialState: States
) {
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
      if (isOperator(lastClicked)) {
        return {
          ...state,
          activeOperator: action,
          lastClicked: action
        }
      }
      if (activeOperator) {
        // calc
        if (lastClicked === '%') {
          tmp = execCalc(
            prev,
            toNumber(prev) * toNumber(current),
            activeOperator
          )
        } else {
          tmp = execCalc(prev, current, activeOperator)
        }
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
        return {
          ...state,
          prev: current,
          activeOperator: action === '=' ? null : action,
          lastClicked: action,
          isFloat: false
        }
      }

    case '+/-':
      if (lastClicked === '%') {
        return state
      }
      if (isOperator(lastClicked) || lastClicked === '=' || current == '0') {
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

    case '%':
      if (lastClicked === '%' || lastClicked === null) {
        return state
      } else {
        return {
          ...state,
          lastClicked: action,
          current: `${current}${action}`
        }
      }

    case '.':
      if (lastClicked === '%') {
        return state
      }
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
      if (lastClicked === '%') {
        return state
      }
      if (isOperator(lastClicked)) {
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
}
