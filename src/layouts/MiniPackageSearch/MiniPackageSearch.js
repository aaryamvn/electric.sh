import React from 'react'
import Input from '../../components/Input/Input'
import Package from '../../components/Package/Package'
import './MiniPackageSearch.css'

const MiniPackageSearch = (props) => {
    return (
        <div className="mini__package_search w-100">
            <Input type="text" placeholder="Search over 2000 packages" className="packageSearch" />
            <div className="mini__package_search__package">
                <Package name="Visual Studio Code" />
                <Package name="Adobe Acrobat Reader DC" />
                <Package name="7-ZIP" />
            </div>
        </div>
    )
}

export default MiniPackageSearch