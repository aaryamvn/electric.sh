import React, { useEffect } from 'react'
import './Section.css'

const Section = (props) => {
    return (
        <section className="section">
            <div className="sub__section row d-flex justify-content-between">
                <div className="section__image_cont d-none d-md-block col-md-5">
                    <img src={props.image} alt="" class={"section__image " + props.imageClass} />
                </div>
                <div className={"section__description col-12 col-md-7 " + props.className}>
                    <h1 className="section__title">{props.title}</h1>
                    <p className="section__text">{props.children}</p>
                </div>
            </div>
        </section>
    )

}

export default Section
