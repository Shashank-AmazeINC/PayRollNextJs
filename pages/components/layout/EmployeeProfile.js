import React from 'react'
import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'

function EmployeeProfile() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div>
            <div className='container'>
                <div className='card mt-4 shadow-lg border-0'>
                    <div className='row mt-2 p-2'>
                        <div className='col-lg-12'>
                            <p>My Information</p>
                            <hr />
                        </div>

                        <div className='col-lg-3'></div>
                        <div className='col-lg-2'>
                            <div className='mb-3'>
                                <span>Title</span>
                                <select className='form-select'>
                                    <option>Select title</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <span>Nick Name</span>
                                <input type="text" className='form-control' placeholder='Nick Name' />
                            </div>

                            <div className='mb-3'>
                                <span>Gender</span>
                                <select className='form-select'>
                                    <option>Select Gender</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <span>Father Name</span>
                                <input type="text" className='form-control' placeholder='Father Name' />
                            </div>

                            <div className='mb-3'>
                                <span>Personal Email <i className='text-danger'>*</i></span>
                                <input type="email" className='form-control' placeholder='Personal Email' />
                            </div>
                        </div>

                        <div className='col-lg-2'>
                            <div className='mb-3'>
                                <span>First Name <i className='text-danger'>*</i></span>
                                <input type="text" className='form-control' placeholder='First Name' />
                            </div>

                            <div className='mb-3'>
                                <span>Date Of Birth <i className='text-danger'>*</i></span>
                                <input type="date" className='form-control' />
                            </div>

                            <div className='mb-3'>
                                <span>Maritial Status <i className='text-danger'>*</i></span>
                                <select className='form-select'>
                                    <option>Select Status</option>
                                </select>
                            </div>

                            <div className='mb-3 Dropzone' {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p>Drop the files here ...</p> :
                                        <p>Drop files here Only JPG,PNG,JPEG</p>
                                }
                            </div>
                        </div>

                        <div className='col-lg-2'>
                            <div className='mb-3'>
                                <span>Middle Name</span>
                                <input type="text" className='form-control' placeholder='Middle Name' />
                            </div>

                            <div className='mb-3'>
                                <span>Place of Birth</span>
                                <input type="text" className='form-control' placeholder='Place of Birth' />
                            </div>
                        </div>

                        <div className='col-lg-2'>
                            <div className='mb-3'>
                                <span>Last Name <i className='text-danger'>*</i></span>
                                <input type="text" className='form-control' placeholder='Last Name' />
                            </div>

                            <div className='mb-3'>
                                <span>Country of Birth</span>
                                <select className='form-select'>
                                    <option>Select Country</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <span>Mother Name</span>
                                <input type="text" className='form-control' placeholder='Mother Name' />
                            </div>

                            <div className='mb-3'>
                                <span>Personal Contact Number <i className='text-danger'>*</i></span>
                                <input type="number" className='form-control' placeholder='Personal Contact Number' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeProfile