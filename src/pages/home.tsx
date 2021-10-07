import React from 'react'
import { useHistory } from 'react-router'

const HomePage: React.FC = () => {

    const location = useHistory()

    return (
        <div className="page">
            <button onClick={() => location.push('/history')}>Home</button>
        </div>
    )
}

export default HomePage