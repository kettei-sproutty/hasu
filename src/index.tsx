import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'

const MyApp: React.FC = () => {

    return <div className="w-96 h-96 bg-green-400">Test</div>
}

ReactDOM.render(<MyApp />, document.getElementById('root'))