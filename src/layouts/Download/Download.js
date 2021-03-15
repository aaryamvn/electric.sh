import React from 'react'
import './Download.css'
import Button from '../../components/Button/Button'

const Download = () => {
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

    if (getOS() === "Windows") {
        return (
            <div className="download__section">
                <h1 className="download__section_title">download electric.</h1>
                <div className="download__methods row">
                    <div className="download__method col-md mr-md-3 col-sm-6 d-flex flex-column align-items-center">
                        <h3 className="download__method_title">using the official installer</h3>
                        <Button className="download__button" link="http://electric-package-manager.herokuapp.com/install/windows"><i className="fab fa-windows"></i>Download For Windows</Button>
                        <div className="download__steps">
                            <span className="download__step">Step 1: Run the installer</span>
                            <span className="download__step">Step 2: Type in "electric" in your command line interface of choices</span>
                            <span className="download__step">Electric is now installed on your system!</span>
                        </div>
                    </div>
                    <div className="download__method col-md col-sm-6">
                        <h3 className="download__method_title">using powershell</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Download
