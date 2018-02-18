import { observable } from 'dob'

const state = observable({
  ui: {
    clickCount: 0,
    addCount () {
      ++state.ui.clickCount
    }
  }
})

export default state
