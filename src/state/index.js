import { observable } from 'dob'

const state = observable({
  ui: {
    clickCount: 0,
    clickHistory: [],
    addCount () {
      ++state.ui.clickCount
      state.ui.clickHistory.push(1)
    }
  },
  nest: {
    a: 1,
    b: 2
  }
})

export default state
