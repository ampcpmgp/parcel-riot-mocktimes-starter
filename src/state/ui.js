import { observable } from 'dob'

const ui = observable({
  clickCount: 0,
  addCount () {
    ++ui.clickCount
  }
})

export default ui
