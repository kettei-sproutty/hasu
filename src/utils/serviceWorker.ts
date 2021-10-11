const registerServiceWork = () => {
  window.navigator.serviceWorker
    .register('./service-worker.js', { scope: './background.js' })
    .then((reg) => {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope)
    })
    .catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error)
    })
}

export default registerServiceWork
