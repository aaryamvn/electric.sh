import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <a className={"btn " + props.className} href={props.link} target={props.target} onClick={props.clickHandler}>{props.children}</a>
    )
}

export default Button 