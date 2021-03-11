import React from 'react'
import './Banner.css'
import packages from '../../static/images/packages.png'
import Button from '../../components/Button/Button'

const Banner = (props) => {
    return ( // hi
        <div className="banner">
            <div className="d-flex align-items-center justify-content-between">
                <div className="banner__text">
                    <h1 className="banner__impact_bold">package management,</h1>
                    <h2>at <span className="banner__impact">lightning</span> speed.</h2>
                    <Button className="download__button" link="http://electric-package-manager.herokuapp.com/install/windows"><i class="fab fa-windows"></i>Download For Windows</Button>
                    <Button className="github__button" link="https://github.com/electric-package-manager/electric" target="_blank"><i class="fab fa-github"></i> View on GitHub</Button>
                </div>
                <div className="d-none d-lg-block banner__image_cont">
                    <img src={packages} alt="" class="mt-3 banner__image" />
                </div>
            </div>
        </div>
    )
}

export default Banner
