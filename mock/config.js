import mock from 'am-mocktimes'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Path from '../src/const/path'

const mockAdapter = new MockAdapter(axios, { delayResponse: 500 })
mockAdapter.onGet(Path.TEST).reply(200, {
  successed: true
})

mock({
  pattern (param) {
    console.log('pattern', param)
  }
})
