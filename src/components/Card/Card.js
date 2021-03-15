import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <section className={"adjCard " + props.className}>
            <div className={"adjCard__description"}>
                <h1 className="adjCard__title"><span className="adjCard__title_emoji">{props.emoji}</span>{props.title}</h1>
                <p className="adjCard__text">{props.children}</p>
            </div>
        </section>
    )

}

export default Card
