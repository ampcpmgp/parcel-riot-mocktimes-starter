import 'babel-polyfill'
import riot from 'riot'
import route from 'riot-route'
import 'normalize.css'
import './main.css'
import './tags/app-root.riot'

riot.mount('app-root')
route.base('/')
route.exec()
