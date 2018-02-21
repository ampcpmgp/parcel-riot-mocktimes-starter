import { observable } from 'dob'

const state = observable({
  ui: {
    clickCount: 0,
    clickHistory: []
  },
  nest: {
    a: 1,
    b: 2
  }
})

export default state
