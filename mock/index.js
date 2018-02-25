import 'babel-polyfill'
import './config'
import '../src/main'

if (module.hot) {
  module.hot.accept(() => {
    // イベント発火が必要な、複雑なアルゴリズムを組む場合に利用。
    // window.location.reload()
  })
}

console.clear()
