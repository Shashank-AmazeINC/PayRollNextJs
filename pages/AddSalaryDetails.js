import React from 'react'

function AddSalaryDetails() {
    return (
        <div>
            <h3 className='text-primary fs-5 mt-3'>Salary Details</h3>
            <div className='container-fluid '>
                <div className='row '>
                    <div className='col-lg-3 mt-2'>
                        <p>Staff</p>
                        <select className='form-select'>
                            <option>No data</option>
                        </select>
                    </div>

                    <div className='col-lg-3 mt-2'>
                        <p>Basic Salary</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-3 mt-2'>
                        <p>Effective Date</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>
                </div>

                <div className='row mt-4 shadow-lg rounded-3 p-5'>
                    <div className='col-lg-4 mt-4'>
                        <p>Coop Contribution</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-4 mt-4'>
                        <p>Coop Contribution Startdate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>Coop Contribution Enddate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>GYM membership</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-4 mt-4'>
                        <p>GYM membership StartDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>GYM membership EndDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>AL AR4/ VACCINE</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-4 mt-4'>
                        <p>AL AR4/ VACCINE StartDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>AL AR4/ VACCINE EndDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>AR Hotel</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-4 mt-4'>
                        <p>AR Hotel StartDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>AR Hotel EndDate

                        </p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>GOLD'S GYM DEDUCTION</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-4 mt-4'>
                        <p>GOLD'S GYM DEDUCTION StartDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>GOLD'S GYM DEDUCTION EndDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>NHDMFC</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-4 mt-4'>
                        <p>NHDMFC StartDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>
                            NHDMFC EndDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>PARKING RENTAL</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-4 mt-4'>
                        <p>PARKING RENTAL StartDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>PARKING RENTAL EndDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>Union Agency Fee</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-4 mt-4'>
                        <p>Union Agency Fee StartDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>Union Agency Fee EndDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>Union Due</p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>


                    <div className='col-lg-4 mt-4'>
                        <p>Union Due StartDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <p>Union Due EndDate</p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-10'></div>
                    <div className='col-lg-1 mt-2 text-end'>
                        <button  className='btn btn-primary'>Cancel</button>
                    </div>
                    <div className='col-lg-1 mt-2'>
                        <button  className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSalaryDetails