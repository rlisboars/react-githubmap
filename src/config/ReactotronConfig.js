import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ name: 'Github Map' })
    .use(reactotronRedux())
    .connect()
  console.tron = tron
  tron.clear()
}
