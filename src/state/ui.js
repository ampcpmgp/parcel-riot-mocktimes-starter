import observable from '../utils/observable'

const ui = observable({
  clickCount: 0,
  nest: {
    a: 1,
    b: 2
  }
})

export default ui
