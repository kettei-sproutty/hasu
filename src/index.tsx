import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'

const MyApp: React.FC = () => {

    return <span className="uppercase bg-green-400">{process.env['NODE_ENV']}</span>
}

ReactDOM.render(<MyApp />, document.querySelector('#root'))