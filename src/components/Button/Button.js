import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <a className={"btn " + props.className} href={props.link} target={props.target}>{props.children}</a>
    )
}

export default Button 