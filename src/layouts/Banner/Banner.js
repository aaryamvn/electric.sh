import React from 'react'
import './Banner.css'
import packages3d from '../../static/images/packages3d.png'
const Banner = (props) => {
    return (
        <div className="banner">
            <div className="row d-flex align-items-center">
                <div className="col-lg-5">
                    <h1 className="banner__impact_bold">packages,</h1>
                    <h2>with a touch of <span className="banner__impact">efficiency.</span></h2>
                </div>
                <div className="col-lg-7 d-none d-lg-block">
                    <img src={packages3d} alt="" class="mt-3" />
                </div>
            </div>
        </div>
    )
}

export default Banner
