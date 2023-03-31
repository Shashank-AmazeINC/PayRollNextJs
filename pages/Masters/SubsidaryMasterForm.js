import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import subsidaryform from '../../styles/SubsidaryMasterForm.module.css'
import Link from 'next/link';
function SubsidaryMasterForm() {
      // form validation rules 
      const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),

        Name: Yup.string()
        .required('name is required')
        .min(6,'at least 6 characters'),
        
        Description: Yup.string()
            .min(25, 'min 25 characters')
            .required('Description is required'),

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div>
            <div className="container-fluid">
                <div className={subsidaryform.row}>
                    <div className="col-lg-4">
                        <h3 className="text-primary fs-5 mt-3 fw-bold">Subsidiary Master Details</h3>
                    </div>
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-2">
                    </div>
                </div>
                <br />
                <div className={subsidaryform.card}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row leavereq">
                        <div className="col-md-3 fw-bold">
                            <label >Subsidiary<span className={subsidaryform.span}>*</span></label></div>
                        <div className="col-md-4">
                            <label className='fw-bold' >Subsidiary Description<span className={subsidaryform.span}>*</span></label></div>
                    </div>
                    <br/>
                    <div className="row leavereq">
                        <div className="col-md-3">
                            <input type="text"{...register('Name')}  placeholder="Subsidiary Name" name="Name" id="Name" className={`form-control ${errors.Name ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.Name?.message}</div>
                        </div>
                        <div className="col-md-4">
                        <textarea name="Description" rows="3" type="text"{...register('Description')} placeholder='Description'  className={`form-control ${errors.Description ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.Description?.message}</div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-7">
                        </div>
                        <div className="col-lg-2">
                           <Link href="/Masters/SubsidaryMasterDash"> <button className={subsidaryform.button}>CANCEL</button></Link>
                        </div>
                        <div className="col-lg-2"><button className={subsidaryform.button}>SUBMIT</button>
                        </div>
                    </div>
                    <br />
               </form> </div>
            </div>

        </div>
    )
}

export default SubsidaryMasterForm