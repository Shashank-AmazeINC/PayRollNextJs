import React from 'react'
import { useEffect,useState } from 'react';
import { useForm } from "react-hook-form";
import loginStyle from '../styles/login.module.css'
import eye from '../public/eye.svg'
import { EyeOutlined, EyeInvisibleOutlined , EyeTwoTone} from '@ant-design/icons';
import Loginpage from '../public/DigiLogin.png'
import digiLogo from '../public/DigiLogo.png'
import Image from 'next/image'
import styles from '../components/login.module.css';
import { Button, Input, Space } from 'antd';
function Login() {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [passwordShown, setPasswordShown] = useState('');
    // const [positions, setPosition] = useState([]);
    const [iconVisible, setIconVisible] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

        const positions = [
            { id: 1, short: "Manager" },
            { id: 2, short: "Employee" },
            { id: 3, short: "Payroll Manager" },
            { id: 4, short: "SBU" },
            { id: 5, short: "IT Team" },
            { id: 6, short: "HR Head" }
        ]
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '50%'
            },
            errorMsg: {
                fontSize: '12px',
                fontWeight: '500',
                color: 'red'
            },
            inputLabel: {
                fontSize: '16px'
            }
        };
    

    //   useEffect(() => {
    //     async function getData() {
            
    //     }
    //     getData()
    // }, [1]);
    return (
      // <div>
        //   <div className='container-fluid'>

      //         <div className='card' id={loginStyle.card}>
      //             <div className='row mt-5'>

      //                 <div className='col-lg-2'></div>
      //                 <div className='col-lg-4'>
      //                 {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      //                 <form>
      //                     <Image src={digiLogo} alt="digiLogo" width={250} />
      //                     <select className='form-select' >
      //                         <option>Select Company</option>
      //                         <option value='Company 1'>Company 1</option>
      //                     </select>
      //                     <div>
      //                         <select className='form-select mt-2'
      //                         // {...register("PositionID", { required: true })}
      //                         >
      //                             <option value="">Select Position</option>
      //                             {
      //                                 positions.map(()=> {
      //                                     // return (
      //                                         <option value={positions.id}>{positions.short}</option>
      //                                     // )
      //                                 })
      //                             }
      //                         </select>
      //                         {/* {errors.RoleID && <span style={customStyles.errorMsg}>Please select role</span>} */}
      //                         </div>
      //                     {/* <select className='form-select mt-2'>
      //                         <option>Select Position</option>
      //                         <option></option>
      //                         <option>Manager</option>
      //                         <option>Employee</option>
      //                         <option>Payroll Manager</option>
      //                         <option>SBU</option>
      //                         <option>IT Team</option>
      //                         <option>HR Head</option>
      //                     </select> */}

      //                     <div className='form-floating mt-2'>

      //                         <input type="text" className='form-control' id={loginStyle.inputField} placeholder='Enter your Username' />
      //                         <label>UserName</label>

      //                     </div>

      //                     <div className='form-floating mt-2 '>
      //                         <input type={passwordShown ? "text" : "password"} size="4" className='form-control' placeholder='Enter your Password' />
      //                         <label >Password </label>
      //                         <button onClick={togglePassword}><Image className={loginStyle.img} src={eye} alt="eye" width={30} /></button>

      //                     </div>

      //                     <div className='row mt-2'>
      //                         <div className='col-lg-6'>
      //                             <a className={loginStyle.loginLink} href='#' >Forgot password ?</a>
      //                         </div>

      //                         <div className='col-lg-6'>
      //                             <button className='btn btn-primary btn-sm text-right ' id={loginStyle.loginButton}>Login with 365 </button>

      //                         </div>

      //                     </div>
      //                     </form>
      //                     <br />
      //                     <p> <b> Copyright © 2022 AMAZE ONE. All Rights Reserved </b>
      //                     </p>

      //                 </div>
      //                 <div className='col-lg-4 '>
      //                     <Image src={Loginpage} alt="DigiLogin" width={350} />
      //                 </div>

      //             </div>
      //         </div>

      //     </div>
      //     <br />
      //     <br />
      //     <p className='text-center'> <b> Copyright © 2022 AMAZE ONE. All Rights Reserved </b></p>

      // </div>
      <div className='container-fluid'>
      <div
        className="row"
        style={{
          backgroundColor: "#95a0e2",
          height: "100vh",
          paddingTop: "7%",
        }}
      >
        <div className="col-lg-2"></div>
        <div className="col-lg-8    ">
          <div className="row">
            <div className={"col-lg-6 " + styles.logincard}>
              {/* <div className='col-lg-4'> */}
              <form onSubmit={handleSubmit(onSubmit)}>
              {/* <form> */}
                <Image src={digiLogo} alt="digiLogo" width={250} />
                <div>
                <select className="form-select"
                 {...register("CompanyID", { required: true })}
                 >
                  <option>Select Company</option>
                  <option value="Company 1">Company 1</option>
                </select>
                {errors.CompanyID && <span style={customStyles.errorMsg}>Please select Positions</span>}
                </div>
                <div>
                  <select
                    className="form-select mt-2"
                    {...register("PositionID", { required: true })}
                  >
                    <option value="">Select Position</option>
                    {positions.map((position) => {
                      return (
                      <option key={position.id} value={position.id}>{position.short}</option>
                       )
                    })}
                  </select>
                  {errors.RoleID && <span style={customStyles.errorMsg}>Please select Positions</span>}
                </div>
                {/* <select className='form-select mt-2'>
                                 <option>Select Position</option>
                                 <option></option>
                                 <option>Manager</option>
                                 <option>Employee</option>
                                 <option>Payroll Manager</option>
                                 <option>SBU</option>
                                 <option>IT Team</option>
                                 <option>HR Head</option>
                             </select> */}

                <div className="form-floating mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id={loginStyle.inputField}
                    placeholder="Enter your Username"
                  />
                  <label>UserName</label>
                </div>

                <div className={"form-floating mt-2"}>
                  <input
                    type={passwordShown ? "text" : "password"}
                    size="4"
                    className="form-control"
                    placeholder="Enter your Password"
                  />
                  <label>Password </label>
                  {/* <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
      /> */}
                  <Image
                    className={styles.inputwrapper}
                    src={eye}
                    onClick={togglePassword}
                    alt="eye"
                    width={25}
                    height="auto"
                  />
                </div>

                <div className="row mt-2">
                  <div className="col-lg-6">
                    <a className={loginStyle.loginLink} href="#">
                      Forgot password ?
                    </a>
                  </div>

                  <div className="col-lg-6">
                    <button
                      className="btn btn-primary btn-sm text-right "
                      id={loginStyle.loginButton}
                    >
                      Login with 365
                    </button>
                  </div>
                </div>
              </form>
              <br />
              <p>
                <b> Copyright © 2022 AMAZE ONE. All Rights Reserved </b>
              </p>

              {/* </div> */}
            </div>
            <div className={"col-lg-6 " + styles.divNegate} style={{ position: "relative" }}>
              <Image
                src={Loginpage}
                alt="DigiLogin"
                style={{ width: "408px", height: "auto" }}
              />
            {/* </div> */}
            <div className={styles.content}>
              <h1>Secured and Easy to Use</h1>
              <p>Smart all-in-one software for HR operations</p>
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
      </div>
    );
}

export default Login;