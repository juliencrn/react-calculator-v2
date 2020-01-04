import theme from './theme'

const {
  common: { black, white },
  primary,
  grey
} = theme.palette

export type TouchType = {
  id: string
  text: string
  style: any
  large?: boolean
}

const touchList: Array<TouchType> = [
  { id: 'clear', text: 'AC', style: { color: black, background: grey[400] } },
  {
    id: 'negative',
    text: '+/-',
    style: { color: black, background: grey[400] }
  },
  { id: 'percent', text: '%', style: { color: black, background: grey[400] } },
  {
    id: 'divide',
    text: '÷',
    style: { color: white, background: primary.main }
  },
  { id: 'seven', text: '7', style: { color: white, background: grey[700] } },
  { id: 'eight', text: '8', style: { color: white, background: grey[700] } },
  { id: 'nine', text: '9', style: { color: white, background: grey[700] } },
  {
    id: 'multiply',
    text: 'x',
    style: { color: white, background: primary.main }
  },
  { id: 'four', text: '4', style: { color: white, background: grey[700] } },
  { id: 'five', text: '5', style: { color: white, background: grey[700] } },
  { id: 'six', text: '6', style: { color: white, background: grey[700] } },
  {
    id: 'subtract',
    text: '-',
    style: { color: white, background: primary.main }
  },
  { id: 'one', text: '1', style: { color: white, background: grey[700] } },
  { id: 'two', text: '2', style: { color: white, background: grey[700] } },
  { id: 'three', text: '3', style: { color: white, background: grey[700] } },
  { id: 'add', text: '+', style: { color: white, background: primary.main } },
  {
    id: 'zero',
    text: '0',
    style: { color: white, background: grey[700] },
    large: true
  },
  { id: 'decimal', text: '.', style: { color: white, background: grey[700] } },
  { id: 'equals', text: '=', style: { color: white, background: primary.main } }
]

export default touchList
