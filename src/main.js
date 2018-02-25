import 'babel-polyfill'
import riot from 'riot'
import 'normalize.css'
import './main.css'
import './app/root'

export default () => {
  riot.mount('app-root')
}
