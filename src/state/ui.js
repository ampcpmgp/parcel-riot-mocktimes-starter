import { observable } from 'dob'

const ui = observable({
  clickCount: 0,
  clickHistory: []
})

export const addCount = () => {
  ++ui.clickCount
  ui.clickHistory.push(1)
}

export default ui
