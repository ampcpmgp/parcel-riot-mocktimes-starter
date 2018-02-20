import onChange from 'on-change'

export default (state) => {
  const observableObj = onChange(state, () => {
    console.log('hayatake', state);
  })

  observableObj.watch = () => console.log('register')
  console.log('hayatake', observableObj)

  return observableObj
}
