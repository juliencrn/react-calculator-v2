type Operators = '+' | '-' | 'x' | '÷'

export const operators: Operators[] = ['+', '-', '÷', 'x']

export function execCalc(a: number, b: number, operator: Operators) {
  const x = Number(a)
  const y = Number(b)
  switch (operator) {
    case '-':
      return x - y
    case '÷':
      return x / y
    case 'x':
      return x * y
    case '+':
      return x + y
    default:
      return 0
  }
}
