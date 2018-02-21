import { Action } from 'dob'
import state from '../state'

export const addCount = () => {
  Action(() => {
    ++state.ui.clickCount
    state.ui.clickHistory.push(1)
  })
}
