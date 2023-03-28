import React from 'react'
import dynamic from 'next/dynamic'
import runpayroll from '../styles/runpayroll.module.css'
function Runpayroll() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div id={runpayroll.card} className="row card card1">
                <div className="row">
                    <div class="col-lg-3">
                        <h3 className='text-primary fs-5 mt-3'>Select Paycode </h3>
                        <div className="dropdown">

                            <select id="PaycodeID" name="PaycodeID" className="form-control">

                                <option value="" disabled="">
                                    Select Paycode </option>
                                <option value="2">SepSemi01</option>
                                <option value="3">SepSemi02</option>
                                <option value="5">OctSemi01</option>
                                <option value="6">OctSemi02</option>
                                <option value="7">NovSemi01</option>
                                <option value="8">NovSemi02</option>
                                <option value="9">DecSemi01</option>
                                <option value="10">DecSemi02</option>
                                <option value="11">Jan23Semi01</option>
                                <option value="12">Jan23Semi02</option>
                                <option value="13">Feb23Semi01</option>
                                <option value="14">Feb23Semi02</option>
                                <option value="15">Mar23Semi01</option>
                                <option value="16">MarSemi02</option>
                                <option value="17">Apr23Semi01</option>
                                <option value="18">Apr23Semi02</option>
                                <option value="19">May23Semi01</option>
                                <option value="20">MaySemi02</option>
                                <option value="21">Jun23Semi01</option>
                                <option value="22">Jun23Semi02</option>
                                <option value="23">July23Semi01</option>
                                <option value="24">July23Semi02</option>
                                <option value="25">Aug23Semi01</option>
                                <option value="26">Aug23Semi02</option>
                                <option value="28">02152023</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <br ></br><p></p>
                        <button data-toggle="collapse" data-target="#employee" class="button collapsed" aria-expanded="false">Fetch Employees
                        </button>
                    </div>
                    <div className="col-lg-2">
                        <p >Search <br ></br></p>
                        <input placeholder="Search" type="text" class="form-control "></input>
                    </div>
                    <div className="col-lg-2">
                        <p >Select Position </p>
                        <div className="dropdown">
                            <select id="Year" name="Year" className="form-control ">
                                <br ></br>
                                <option value="Select" style={{ color: "#0C275A" }} disabled="">Select Position
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <p >Select Department </p>
                        <div class="dropdown">
                            <select id="Year" name="Year" className="form-control ">
                                <br ></br>
                                <option value="Select" style={{ color: " #0C275A" }} disabled="">Select Department
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-lg-4">
                    </div>
                </div>
                <br ></br>
            </div>
            <div class="row">
                <div class="col-lg-2">
                </div>
                <div class="col-lg-2">
                </div>
                <div class="col-lg-2">
                    <br ></br>
                    <button type="button" id="btn_button" class="form-control CancelBTN" style={{ width: "70%" }}>Run Payroll
                    </button>
                </div>
            </div>
            <br ></br>
            <div className="row">
                <div className="col-lg-4">
                </div>
                <div class="col-lg-5">
                </div>
                <div className="col-lg-3">
                </div>
            </div>
            <div id="employee1" className="row rowwidth collapse" style={{ height: "500px" }}><div className="col-lg-12">
                <table id="downloadaplication" className="table table-bordered fonttxt" style={{ height: "300px" }}>
                    <thead >
                        <tr >
                            <th >
                                <input type="checkbox"></input>
                            </th>
                            <th >Employee Id</th>
                            <th >Employee Name</th>
                            <th >Department</th>
                            <th >Position</th>
                            <th >Email</th>
                            <th >Date Of Joining</th>
                            <th >Manager</th>
                        </tr>
                    </thead>
                    <tbody >
                    </tbody>
                </table>
            </div>
                <div className="text-right">
                    <br></br>
                    <pagination-controls className="poppinns">
                        <pagination-template>
                            <ul className="ngx-pagination" aria-label="Pagination">
                                <li className="pagination-previous">

                                </li>

                                <li className="small-screen">  / NaN </li>

                                <li class="pagination-next"><a tabindex="0" aria-label="Next page"> Next <span class="show-for-sr">page</span></a>
                                </li>
                            </ul></pagination-template></pagination-controls
                    ></div>
            </div>
            <br ></br><br ></br>
            <div id="employee" class="row rowwidth collapse" >
                <div className="col-lg-12">
                    <table id="downloadaplication" className="table table-bordered fonttxt" style={{ height: "300px" }}><thead ><tr ><th >
                        <input type="checkbox">
                        </input>
                    </th>
                        <th >Employee Id</th>
                        <th >Employee Name</th>
                        <th >Department</th>
                        <th >Position</th>
                        <th >Email</th>
                        <th >Date Of Joining</th>
                        <th >Manager</th>

                    </tr>
                    </thead>
                        <tbody >

                        </tbody>
                    </table>
                </div>
                <div className="text-right">
                    <br ></br>
                    <pagination-controls className="poppinns">
                        <pagination-template><ul className="pagination" aria-label="Pagination">
                            <li className="pagination-previous">
                            </li>
                            <li class="small-screen">  / NaN </li>
                            <li className="pagination-next">
                                <a tabindex="0" aria-label="Next page"> Next
                                    <span className="show-for-sr">page</span></a>
                            </li>
                        </ul>
                        </pagination-template>
                    </pagination-controls>
                </div>
            </div>
            
        </div>
    )
}

export default dynamic(() => Promise.resolve(Runpayroll), { ssr: false })