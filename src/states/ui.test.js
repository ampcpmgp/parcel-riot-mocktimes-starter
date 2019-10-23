import test from 'ava'
import uiState from './ui'

test('初期化', t => {
  t.deepEqual(uiState, {
    clickCount: 0
  })
})

test('bar', async t => {
  // t.is(await bar, 'bar')
  t.pass()
})
