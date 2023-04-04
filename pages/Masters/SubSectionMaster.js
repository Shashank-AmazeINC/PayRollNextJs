import Link from 'next/link'
import React from 'react'
import Styles from '../../styles/SubSectionMaster.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
function SubSectionMaster() {
    return (
        <div>
            <br />
            <h5 id={Styles.h5} className='text-primary fw-bold'>SubSection Master</h5>
            <div className="card p-3  shadow-lg rounded-4" id={Styles.card}>
                <div class="row">
                    <div class="col-lg-1">
                        <p >Filter By</p>
                    </div>
                    <div class="col-lg-5">
                        <input type="text" placeholder="Search" id="term" class="form-control " />
                    </div>
                    <div class="col-lg-3">
                    </div>
                    <div class="col-lg-3">
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-7'></div>
                <div className='col-lg-4'>
<<<<<<< HEAD:pages/SubSectionMaster.js
                    <Link className='btn btn-primary btn-sm ' id={Styles.addButton} href="/subsectionmasterform"> <AiOutlinePlusCircle size={18} /> ADD NEW  </Link>
=======
                    <Link className='btn btn-primary btn-sm ' id={Styles.addButton} href="/Masters/SubSectionMasterForm"> <AiOutlinePlusCircle size={18} /> ADD NEW  </Link>
>>>>>>> 1b7d84981ed877a93a006967ddc919860d7ce983:pages/Masters/SubSectionMaster.js
                </div>
            </div>
            <br />
            <br />
            <div className='container-fluid'>

                <div className='row '>

                    <table className=' table table-sm  table-bordered ' id={Styles.table}>
                        <thead>
                            <tr id={Styles.td} className='bg-info'>
                                <th className='text-white'>Sort</th>
                                <th className='text-white'>Description</th>
                                <th className='text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr id={Styles.td}>
                                <td id={Styles.td} >Ayala Land Inc.  ALI-Aprisa  Finance CFO Group N/A	</td>
                                <td id={Styles.td}>Ayala Land Inc. ALI-Aprisa FinanceCFO Group N/A	</td>
                                <td id={Styles.td}><button id={Styles.actionButton}>Edit</button>
                                    <br />
                                    <button id={Styles.actionButton}>Delete</button>
                                </td>
                            </tr>
                            <tr id={Styles.td}>
                                <td id={Styles.td}>Ayala Land Inc.  ALI-Aprisa  Finance CFO Group N/A	</td>
                                <td id={Styles.td}>Ayala Land Inc. ALI-Aprisa FinanceCFO Group N/A	</td>
                                <td id={Styles.td}>
                                    <button id={Styles.actionButton}  >Edit</button>
                                    <br />
                                    <button id={Styles.actionButton}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>









        </div >
    )
}

export default SubSectionMaster