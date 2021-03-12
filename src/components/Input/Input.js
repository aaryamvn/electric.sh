import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <div className={"form-group " + props.parentClassName}>
            <input type={props.type} className={"form-control " + props.className} placeholder={props.placeholder} name={props.name} />
        </div>
    )
}

export default Input
