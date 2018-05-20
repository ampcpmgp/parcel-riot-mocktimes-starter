import { observe } from 'dob'
import ui, * as uiAction from '../../state/ui'

export default self => {
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
