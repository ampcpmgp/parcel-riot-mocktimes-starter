import { observe } from 'dob'
import axios from 'axios'
import ui from '../state/ui'
import Path from '../const/path'
import droidKun from '../images/droid-kun.png'

let self

const getApi = async () => {
  try {
    const { data } = await axios.get(Path.TEST)
    self.apiData = JSON.stringify(data)
    self.update()
  } catch (e) {
    console.warn('api error')
  }
}

export default _self => {
  self = _self

  Object.assign(self, {
    title: 'Hello, World',
    droidKun,
    apiData: null,
    getApi,
    clickCount: ui.clickCount
  })

  observe(() => {
    self.update({
      clickCount: ui.clickCount
    })
  })

  self.on('mount', () => {
    self.getApi()
  })
}
