import { Operators } from './touchList'

export type neoNum = string | number

export const operators: Operators[] = ['+', '-', '÷', 'x']

export function toNumber(number: neoNum): number {
  if (typeof number !== 'number') {
    if (number.split('').includes('%')) {
      return parseFloat(number) / 100
    }
    return parseFloat(number)
  }
  return number
}

export function isOperator(symbol: any): boolean {
  return operators.includes(symbol)
}

export function round(result: number): number {
  return Math.round(10000 * result) / 10000
}

export function execCalc(a: neoNum, b: neoNum, operator: Operators) {
  const x = toNumber(a)
  const y = toNumber(b)

  switch (operator) {
    case '-':
      return round(x - y)
    case '÷':
      return round(x / y)
    case 'x':
      return round(x * y)
    case '+':
      return round(x + y)
    default:
      return 0
  }
}
