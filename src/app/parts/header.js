import { observe } from 'dob'
import ui, * as uiAction from '../../state/ui'

let self

export default _self => {
  self = _self

  Object.assign(self, {
    clickCount: ui.clickCount,
    clickHistory: ui.clickHistory,
    addCount: uiAction.addCount
  })

  observe(() => {
    self.update({
      clickCount: ui.clickCount
    })
  })
}
