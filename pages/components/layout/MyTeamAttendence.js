import React from 'react'
import Link from 'next/link'

function MyTeamAttendence() {
    return (
        <div>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-lg-3 text-end'>
                        <Link className='Heading active' href="/components/layout/AttendenceDetails">My Attendence Details</Link>
                    </div>
                </div>

                <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                    <div className='row'>
                        <div className='col-lg-1'>
                            <p>Filter By</p>
                        </div>

                        <div className='col-lg-2'>
                            <p>Start Date</p>
                            <input type="date" className='form-control' />
                        </div>

                        <div className='col-lg-2'>
                            <p>End Date</p>
                            <input type="date" className='form-control' />
                        </div>

                        <div className='col-lg-2'>
                            <p>Staff<i className='text-danger'>*</i></p>
                            <select className='form-select'>
                                <option>Select Staff</option>
                            </select>
                        </div>

                        <div className='col-lg-2'>
                            <p>Search<i className='text-danger'>*</i></p>
                            <input type="text" className='form-control' placeholder='Search' />
                        </div>

                        <div className='col-lg-3'>
                        <button className='btn btn-primary' id='AddButton'>Upload</button><br /><p></p>
                            <button className='btn btn-primary' id='AddButton'>Export To Excel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTeamAttendence