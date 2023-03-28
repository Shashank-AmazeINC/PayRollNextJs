import React from 'react'

function CityMasterForm() {
    return (
        <div>
            <h3 className='text-primary fs-5 mt-3'>City Details</h3>
            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row'>
                    <div className='col-lg-2'>
                        <p>Country<i className='text-danger'>*</i></p>
                        <select className='form-select'>
                            <option>Select Country</option>
                        </select>
                    </div>

                    <div className='col-lg-2'>
                        <p>Province<i className='text-danger'>*</i></p>
                        <select className='form-select'>
                            <option>Select Province</option>
                        </select>
                    </div>

                    <div className='col-lg-2'>
                        <p>City<i className='text-danger'>*</i></p>
                        <input type="text" className='form-control' placeholder='City' />
                    </div>

                    <div className='col-lg-4'>
                        <p>Description<i className='text-danger'>*</i></p>
                        <textarea className='form-control' placeholder='Description'></textarea>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-lg-8'></div>
                    <div className='col-lg-2  text-end'>
                        <button id='AddButton' className='btn btn-primary'>Cancel</button>
                    </div>
                    <div className='col-lg-2 '>
                        <button id='AddButton' className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityMasterForm