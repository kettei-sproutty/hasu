import React from 'react'

type SimpleInputProps = {
    name: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type?: React.HTMLInputTypeAttribute 
}

const SimpleInput: React.FC<SimpleInputProps> = ({name, onChange, type = 'text'}) => {

    return (
        <input type={type} name={name} onChange={onChange} />
    )
}

export default SimpleInput