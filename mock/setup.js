import 'babel-polyfill'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Path from '~/src/const/path'

const mock = new MockAdapter(axios, { delayResponse: 500 })
mock.onGet(Path.TEST).reply(200, {
  successed: true
})
