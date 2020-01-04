type Operators = '+' | '-' | 'x' | '÷'

export const operators: Operators[] = ['+', '-', '÷', 'x']

export function execCalc(a: number, b: number, operator: Operators) {
  const x = Number(a)
  const y = Number(b)
  let result = 0
  switch (operator) {
    case '-':
      result = x - y
      break
    case '÷':
      result = x / y
      break
    case 'x':
      result = x * y
      break
    case '+':
      result = x + y
      break
    default:
      result = 0
      break
  }

  return Math.round(10000 * result) / 10000
}
