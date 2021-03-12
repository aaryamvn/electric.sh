import React from 'react'
import Input from '../../components/Input/Input'
import './MiniPackageSearch.css'

const MiniPackageSearch = (props) => {
    return (
        <div className="mini__package_search w-100">
            <div className="sub__mini__package_search w-100">
                <div className="dummy w-100">
                    <Input type="text" placeholder="Search over 2000 packages" className="packageSearch" parentClassName="d-flex justify-content-center" />
                </div>
            </div>
        </div>
    )
}

export default MiniPackageSearch