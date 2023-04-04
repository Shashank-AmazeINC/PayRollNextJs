import React from 'react'
import citymaster from '../styles/CityMasterDashboard.module.css'
import Link from 'next/link'
function CityMasterDash()
 {
    return (
        <div>

            <div className="row">
                <div className="col-lg-6"><br />
                    <h3 className="text-primary fs-5 mt-3 fw-bold">City Master</h3>
                </div>
                <div className="col-lg-4">
                </div>
                <div className="col-lg-2">
                </div>
            </div>
            <br />
            <div className={citymaster.card}>
                <div className="row">
                    <div className="col-lg-1">
                        <p >Filter By</p>
                    </div>
                    <div className="col-lg-5">
                        <input type="text" placeholder="Search" id="term" className="form-control" />
                    </div>
                    <div className="col-lg-3">
                        <div className="dropdown">
                            <select id="stateID" name="stateID" className="form-control inputfield">
                                <option value="Select">Select Province
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="search">
                    </div>
                </div>
                <br />
            </div><br />
            <div className="row">
                <div className="col-md-10">
                    <p className="text-primary fs-6 mt-3 fw-bold">SHOWING <span >
                    </span>RESULTS</p>
                </div>
                <div className="col-md-2">
                    <Link href="/CityMasterForm"><button className={citymaster.button} tabindex="0">
                        Add New</button></Link>
                </div>
            </div>
            <br />
            <div className="alignForm">
            </div>
            <div className="row">
                <div className="col-md-12">

                    <table class="table table-striped table-hover mt-4">
                        <thead className='bg-info text-white '>
                            <tr >
                                <th >Country Name</th>
                                <th >Province Name</th>
                                <th >City Name</th>
                                <th >Description</th>
                                <th >Action</th>
                            </tr></thead>
                        <tr >
                            <td >Philippines</td>
                            <td >Palawan</td>
                            <td >Aborlan</td>
                            <td >Aborlan</td>
                            <td >
                                <button class="edit-btn" tabindex="0">Edit</button>
                                <button class="edit-btn">Delete</button></td></tr>
                        <tr ><td >Philippines</td>
                            <td >Occidental Mindoro</td>
                            <td >Abra De Ilog</td>
                            <td >Abra De Ilog</td>
                            <td ><button class="edit-btn" tabindex="0">Edit</button>
                                <button class="edit-btn">Delete</button></td></tr>
                        <tr ><td >Philippines</td>
                            <td >Bataan</td>
                            <td >Abucay</td>
                            <td >Abucay</td>
                            <td >
                                <button class="edit-btn" tabindex="0">Edit</button>
                                <button class="edit-btn">Delete</button>
                            </td>
                        </tr>
                        <tr >
                            <td >Philippines</td>
                            <td >Cagayan</td>
                            <td >Abulug</td>
                            <td >Abulug</td>
                            <td >
                                <button class="edit-btn" tabindex="0">Edit</button>

                                <button class="edit-btn">Delete</button>
                            </td></tr>
                        <tr >
                            <td >Philippines</td>
                            <td >Leyte</td>
                            <td >Abuyog</td>
                            <td >Abuyog</td>
                            <td >
                                <button class="edit-btn" tabindex="0">Edit</button>
                                <button class="edit-btn">Delete</button></td>
                        </tr>
                        <tr >
                            <td >Philippines</td>
                            <td >Ilocos Norte</td>
                            <td >Adams</td>
                            <td >Adams</td>
                            <td ><button class="edit-btn" tabindex="0">Edit</button>
                                <button class="edit-btn">Delete</button>
                            </td></tr>
                        <tr ><td >Philippines</td>
                            <td >Quezon</td>
                            <td >Agdangan</td>
                            <td >Agdangan</td>
                            <td >
                                <button class="edit-btn" tabindex="0">Edit</button>

                                <button class="edit-btn">Delete</button>
                            </td></tr>
                        <tr >
                            <td >Philippines</td>
                            <td >Quirino</td>
                            <td >Aglipay</td>
                            <td >Aglipay</td>
                            <td >
                                <button class="edit-btn" tabindex="0">Edit</button>
                                <button class="edit-btn">Delete</button>
                            </td>
                        </tr>

                        <tr >
                            <td >Philippines</td>
                            <td >Pangasinan</td>
                            <td >Agno</td>
                            <td >Agno</td>
                            <td >
                                <button class="edit-btn" tabindex="0">Edit</button>
                                <button class="edit-btn">Delete</button>
                            </td></tr>
                        <tr ><td >Philippines</td><td >Batangas</td>
                            <td >Agoncillo</td>
                            <td >Agoncillo</td>
                            <td ><button class="edit-btn" tabindex="0">Edit</button>
                                <button class="edit-btn">Delete</button>
                            </td>
                        </tr>
                    </table>

                </div
                ></div>




        </div>
    )
}

export default CityMasterDash