import React from 'react'
import './Banner.css'
import packages from '../../static/images/packages.png'
import Button from '../../components/Button/Button'

const Banner = (props) => {

    // getOS function provided by Vladyslav Turak on https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js
    const getOS = () => {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }

        return os;
    }

    return (
        <div className="banner">
            <div className="d-flex align-items-center justify-content-between">
                <div className="banner__text">
                    <h1 className="banner__impact_bold">package management,</h1>
                    <h2>at <span className="banner__impact">lightning</span> speed.</h2>
                    {getOS() === 'Windows' ? <Button className="download__button" link="http://electric-package-manager.herokuapp.com/install/windows"><i className="fab fa-windows"></i>Get For Windows</Button> : ''}
                    <Button className="github__button" link="https://github.com/electric-package-manager/electric" target="_blank"><i className="fab fa-github"></i> View on GitHub</Button>
                </div>
                <div className="d-none d-lg-block banner__image_cont">
                    <img src={packages} alt="" className="mt-3 banner__image" draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Banner
