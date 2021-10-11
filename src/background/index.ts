import registerServiceWork from '../utils/serviceWorker'

if ('serviceWorker' in window.navigator) {
  registerServiceWork()
}
