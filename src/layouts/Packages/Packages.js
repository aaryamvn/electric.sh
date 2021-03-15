import React, { Component } from 'react'
import './Packages.css'

// components
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Package from '../../components/Package/Package'
import Ad from '../../components/Ad/Ad'

export default class App extends Component {
    render() {
        return (
            <div className="packages__container row">
                <div className="col-12 col-md-8 packages__section">
                    <Input parentClassName="package__search_bar__container" className="package__search_bar" type="text" placeholder="Search over 2,000 packages" name="package__search_bar" />
                    <div className="packages">
                        <Package name="7-Zip" />
                        <Package name="Logitech Options" />
                        <Package name="Node JS" />
                        <Package name="Rust" />
                        <Package name="Golang" />
                        <Package name="Adobe Acrobat Reader" />
                    </div>
                </div> 
                <div className="col-md-4 d-none d-md-block ad__section">
                    <Ad title="Contribute your own package" className="p-0">
                        Click the button below to contribute your own package!
                        <Button className="add__package_btn d-block" href="/contribute-package"><i className="fal fa-plus"></i> Add A Package!</Button>
                    </Ad>
                </div>
            </div>
        ) 
    }
}
