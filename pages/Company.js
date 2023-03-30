import React from 'react'
import table from '../styles/company.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
function Company() {
    return (
        <div>
            <div class="col-lg-10 " id={table.column}>
                <br />
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="Heading1">Company Dashboard</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 View"></div>
                    </div>
                    <br></br>
                        <div class="row">
                            <div class="col-lg-12">
                                <table class="table table-hover mt-4">
                                    <thead className='bg-info text-white ' >
                                        <th>Company Logo</th>
                                        <th>Company Name</th>
                                        <th>Nature of Business</th>
                                        <th>Subsidiary Name</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Phone No.</th>
                                        <th style={{paddingLeft:" 47px;"}}>Actions</th>
                                        <tr></tr>
                                    </thead>
                                    <tbody>
                                        <tr class="newFont">
                                            <td style={{width: "10%"}}></td>
                                            <td clasName={table.tabledetail}>Ayala Land, Inc.</td>
                                            <td clasName={table.tabledetail}>E commerce</td>
                                            <td clasName={table.tabledetail}>NA</td>
                                            <td clasName={table.tabledetail}>900 Warehouse 1, Romauldez Street, Tabacalera Compound, Brgay, 664-A
                                                Paco Manila
                                            </td>
                                            <td clasName={table.tabledetail}>Purego.ph</td>
                                            <td clasName={table.tabledetail}>884234924</td>
                                            <td><Link href="/CompanyProfile"><button class="edit-btn">Edit</button></Link><br /><br /><button class="edit-btn">Delete
                                            </button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    
                     </div>

            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Company), { ssr: false })