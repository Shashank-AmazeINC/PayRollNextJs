import React from 'react'
import Link from 'next/link'

function GroupMaster() {
    return (
        <div>
            <h3 className='text-primary fs-5 mt-3'>Group Master</h3>
            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row p-3'>
                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>

                    <div className='col-lg-5'>
                        <input type="text" className='form-control' placeholder='Search...' />
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-2 text-primary fs-6 fw-bold'>
                    <h6>SHOWING RESULTS</h6>
                </div>
                <div className='col-lg-8'></div>
                <div className='col-lg-2 mt-2 text-end'>
                    <Link href="/Masters/groupmasterform" id='AddButton' className='btn btn-primary'>Add New</Link>
                </div>
            </div>

            <table className='table table-hover mt-4 '>
                <thead className='bg-info text-white '>
                    <tr>
                        <th>Short</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default GroupMaster