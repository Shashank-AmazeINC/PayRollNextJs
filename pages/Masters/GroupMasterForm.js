import React from 'react';
import Link from 'next/link'
function GroupMasterForm() {
  return (
    <div>
        <h3 className='text-primary fs-5 mt-3'>Group Master</h3>
            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row'>
                    <div className='col-lg-2'>
                        <p>Name<i className='text-danger'>*</i></p>
                        <input type="text" className='form-control' placeholder='Name' />
                    </div>

                    <div className='col-lg-5'>
                    <p>Description<i className='text-danger'>*</i></p>
                        <textarea className='form-control' placeholder='Description'></textarea>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-lg-8'></div>
                    <div className='col-lg-2  text-end'>
<<<<<<< HEAD:pages/GroupMasterForm.js
                        <Link href='/groupmaster'><button id='AddButton' className='btn btn-primary'>Cancel</button></Link>
=======
                        <Link href='/Masters/GroupMaster'><button id='AddButton' className='btn btn-primary'>Cancel</button></Link>
>>>>>>> 1b7d84981ed877a93a006967ddc919860d7ce983:pages/Masters/GroupMasterForm.js
                    </div>
                    <div className='col-lg-2 '>
                        <button id='AddButton' className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default GroupMasterForm