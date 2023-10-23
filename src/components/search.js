import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar(props) {
    
    const onregionChange = (e) => {
        props.regionChange(e.target.value)
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="input-group mb-3 row">
                        <span className='col-12 mb-2'>Choose a trend by region from the dropdown</span>
                        <select className="form-select me-4" aria-label="Search" onChange={onregionChange} value={props.selectRegion}>
                            <option selected hidden>Search By Region</option>
                            <option value="UG">Uganda</option>
                            <option value="GB">United Kingdom</option>
                            <option value="BE">Belgium</option>
                            <option value="FR">France</option>
                            <option value="KE">Kenya</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
