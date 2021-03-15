import React from 'react'
import './Ad.css'

const Ad = (props) => {
    return (
        <div className={"ad bg-" + props.bg + " " + props.className} >
            <h1 className={"ad__title color-" + props.color}>{props.title}</h1>
            <p className="ad__body">{props.children}</p>
        </div>
    )
}

export default Ad
