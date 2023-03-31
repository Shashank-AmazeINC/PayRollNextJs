import React from 'react'
import profile from '../styles/companyprofile.module.css'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
function CompanyProfile() {
    const onDrop = useCallback(acceptedFiles => {  }, []) 
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const validationSchema = Yup.object().shape({

        CompanyName: Yup.string()
        .required('Companyname is required')
        .min(6, 'at least 6 characters'),

        NatureofBuisness: Yup.string()
        .required('NatureofBuisness is required')
        .min(6,'at least 6 characters'),

        Address1: Yup.string()
        .required('Description is required')
            .min(25, 'min 25 characters'),
        
         Address2: Yup.string()
         .required('Description is required')
         .min(25, 'min 25 characters'),

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
                <div className={profile.card}>

                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <p className="Heading1">Company Profile</p>
                            </div>
                        </div>
                        <div className={profile.card}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-lg-12 negative-padding">
                                    <p className="companyinfo">Company Information</p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <p className="newFont">Company Logo</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont"> Company Name<span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Nature of Business</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="newFont">Address1</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="newFont">Address2</p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2">

                                <div className={profile.Dropzone} {...getRootProps()}><input {...getInputProps()} />
                                 { isDragActive ?
                                 <p>Drop the files here ...</p> : <p>Drag n drop some files here, or click to select files</p>
                                 }
                                 </div>
                                </div>
                                <div className="col-md-2"> <input type="text"{...register('CompanyName')}  placeholder=" Name" name="Name" id="Name" className={`form-control ${errors.CompanyName ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.CompanyName?.message}</div></div>
                                <div className="col-md-2"><input type="text"{...register('NatureofBuisness')}  placeholder="" name="Name" id="Name" className={`form-control ${errors.NatureofBuisness ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.NatureofBuisness ?.message}</div></div>
                                <div className="col-md-3"><textarea placeholder="Address1" className="form-control inputfield "></textarea></div>
                                <div className="col-md-3"><textarea placeholder="Address2" className="form-control inputfield "></textarea></div>
                            </div>
                            <br />
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <p className="newFont">Zip Code</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">RDO</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Email</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Phone</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Fax</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">TIN <span style={{ color: "red" }}>*</span></p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2"><input placeholder="" className="form-control inputfield " /></div>
                                <div className="col-md-2"><input placeholder="" className="form-control inputfield " /></div>
                                <div className="col-md-2"><input placeholder="" className="form-control inputfield " /></div>
                                <div className="col-md-2"><input placeholder="" onkeypress="return /[0-9]/i.test(event.key)" maxlength="11" className="form-control inputfield " /></div>
                                <div className="col-md-2"><input placeholder="" className="form-control inputfield " /></div>
                                <div className="col-md-2">
                                    <input type="text" onkeypress="return /[0-9]/i.test(event.key)" maxlength="9" placeholder="Employee TIN" id="Tin" name="Tin" className="form-control " />
                                </div>
                            </div>
                            <br />
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <p className="newFont">SSS No. <span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">PhilHealth No. <span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">HDMF No. <span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Country</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Province</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">City</p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <input type="text" onkeypress="return /[0-9]/i.test(event.key)" maxlength="10" placeholder="SSS No" id="SSN_No" name="SSN_No" className="form-control " />
                                </div>
                                <div className="col-md-2">
                                    <input type="text" onkeypress="return /[0-9]/i.test(event.key)" maxlength="12" placeholder="PhilHealth No" id="PhilHealthNumber" name="PhilHealthNumber" className="form-control " />
                                </div>
                                <div className="col-md-2"><input placeholder="" className="form-control inputfield " /></div>
                                <div className="col-md-2">
                                    <select id="CountryID" name="CountryID" className="form-control inputfield ">
                                        <option value="0" selected="">Select Country </option>
                                        <option value="327">Afghanistan</option>
                                        <option value="328">Åland Islands</option>
                                        <option value="323">Albania</option>
                                        <option value="75">Algeria</option>
                                        <option value="76">American Samoa</option>
                                        <option value="77">Andorra</option>
                                        <option value="78">Angola</option>
                                        <option value="79">Anguilla</option>
                                        <option value="80">Antarctica</option>
                                        <option value="81">Antigua and Barbuda</option>
                                        <option value="82">Argentina</option>
                                        <option value="83">Armenia</option>
                                        <option value="84">Aruba</option>
                                        <option value="85">Australia</option>
                                        <option value="86">Austria</option>
                                        <option value="87">Azerbaijan</option>
                                        <option value="88">Bahamas</option>
                                        <option value="89">Bahrain</option>
                                        <option value="90">Bangladesh</option>
                                        <option value="91">Barbados</option>
                                        <option value="92">Belarus</option>
                                        <option value="94">Belgium</option>
                                        <option value="95">Belize</option>
                                        <option value="96">Benin</option>
                                        <option value="97">Bermuda</option>
                                        <option value="98">Bhutan</option>
                                        <option value="99">Bolivia</option>
                                        <option value="100">Bosnia and Herzegovina</option>
                                        <option value="101">Botswana</option>
                                        <option value="102">Bouvet Island</option>
                                        <option value="103">Brazil</option>
                                        <option value="104">British Indian Ocean Territory</option>
                                        <option value="105">Brunei Darussalam</option>
                                        <option value="106">Bulgaria</option>
                                        <option value="107">Burkina Faso</option>
                                        <option value="108">Burundi</option>
                                        <option value="109">Cambodia</option>
                                        <option value="110">Cameroon</option>
                                        <option value="111">Canada</option>
                                        <option value="112">Cape Verde</option>
                                        <option value="113">Cayman Islands</option>
                                        <option value="114">Central African Republic</option>
                                        <option value="115">Chad</option>
                                        <option value="116">Chile</option>
                                        <option value="117">China</option>
                                        <option value="118">Christmas Island</option>
                                        <option value="119">Cocos (Keeling) Islands</option>
                                        <option value="120">Colombia</option>
                                        <option value="121">Comoros</option>
                                        <option value="122">Congo</option>
                                        <option value="123">Congo, The Democratic Republic of The</option>
                                        <option value="124">Cook Islands</option>
                                        <option value="125">Costa Rica</option>
                                        <option value="126">Cote Divoire</option>
                                        <option value="127">Croatia</option>
                                        <option value="128">Cuba</option>
                                        <option value="129">Cyprus</option>
                                        <option value="130">Czech Republic</option>
                                        <option value="131">Denmark</option>
                                        <option value="132">Djibouti</option>
                                        <option value="133">Dominica</option>
                                        <option value="134">Dominican Republic</option>
                                        <option value="135">Ecuador</option>
                                        <option value="136">Egypt</option>
                                        <option value="137">El Salvador</option>
                                        <option value="138">Equatorial Guinea</option>
                                        <option value="139">Eritrea</option>
                                        <option value="140">Estonia</option>
                                        <option value="141">Ethiopia</option>
                                        <option value="142">Falkland Islands (Malvinas)</option>
                                        <option value="143">Faroe Islands</option>
                                        <option value="144">Fiji</option>
                                        <option value="145">Finland</option>
                                        <option value="146">France</option>
                                        <option value="147">French Guiana</option>
                                        <option value="148">French Polynesia</option>
                                        <option value="149">French Southern Territories</option>
                                        <option value="150">Gabon</option>
                                        <option value="151">Gambia</option>
                                        <option value="152">Georgia</option>
                                        <option value="153">Germany</option>
                                        <option value="154">Ghana</option>
                                        <option value="155">Gibraltar</option>
                                        <option value="156">Greece</option>
                                        <option value="157">Greenland</option>
                                        <option value="158">Grenada</option>
                                        <option value="159">Guadeloupe</option>
                                        <option value="160">Guam</option>
                                        <option value="161">Guatemala</option>
                                        <option value="162">Guernsey</option>
                                        <option value="163">Guinea</option>
                                        <option value="164">Guinea-bissau</option>
                                        <option value="165">Guyana</option>
                                        <option value="166">Haiti</option>
                                        <option value="167">Heard Island and Mcdonald Islands</option>
                                        <option value="168">Holy See (Vatican City State)</option>
                                        <option value="169">Honduras</option>
                                        <option value="170">Hong Kong</option>
                                        <option value="171">Hungary</option>
                                        <option value="172">Iceland</option>
                                        <option value="173">India</option>
                                        <option value="174">Indonesia</option>
                                        <option value="175">Iran, Islamic Republic of</option>
                                        <option value="176">Iraq</option>
                                        <option value="177">Ireland</option>
                                        <option value="178">Isle of Man</option>
                                        <option value="179">Israel</option>
                                        <option value="180">Italy</option>
                                        <option value="181">Jamaica</option>
                                        <option value="182">Japan</option>
                                        <option value="183">Jersey</option>
                                        <option value="184">Jordan</option>
                                        <option value="185">Kazakhstan</option>
                                        <option value="186">Kenya</option>
                                        <option value="187">Kiribati</option>
                                        <option value="188">Korea, Democratic Peoples Republic of</option>
                                        <option value="189">Korea, Republic of</option>
                                        <option value="190">Kuwait</option>
                                        <option value="191">Kyrgyzstan</option>
                                        <option value="192">Lao Peoples Democratic Republic</option>
                                        <option value="193">Latvia</option>
                                        <option value="194">Lebanon</option>
                                        <option value="195">Lesotho</option>
                                        <option value="196">Liberia</option>
                                        <option value="197">Libyan Arab Jamahiriya</option>
                                        <option value="198">Liechtenstein</option>
                                        <option value="199">Lithuania</option>
                                        <option value="200">Luxembourg</option>
                                        <option value="201">Macao</option>
                                        <option value="202">Macedonia, The Former Yugoslav Republic of</option>
                                        <option value="203">Madagascar</option>
                                        <option value="204">Malawi</option>
                                        <option value="205">Malaysia</option>
                                        <option value="206">Maldives</option>
                                        <option value="207">Mali</option>
                                        <option value="208">Malta</option>
                                        <option value="209">Marshall Islands</option>
                                        <option value="210">Martinique</option>
                                        <option value="211">Mauritania</option>
                                        <option value="212">Mauritius</option>
                                        <option value="213">Mayotte</option>
                                        <option value="214">Mexico</option>
                                        <option value="215">Micronesia, Federated States of</option>
                                        <option value="216">Moldova, Republic of</option>
                                        <option value="217">Monaco</option>
                                        <option value="218">Mongolia</option>
                                        <option value="219">Montenegro</option>
                                        <option value="220">Montserrat</option>
                                        <option value="221">Morocco</option>
                                        <option value="222">Mozambique</option>
                                        <option value="223">Myanmar</option>
                                        <option value="224">Namibia</option>
                                        <option value="225">Nauru</option>
                                        <option value="226">Nepal</option>
                                        <option value="227">Netherlands</option>
                                        <option value="228">Netherlands Antilles</option>
                                        <option value="229">New Caledonia</option>
                                        <option value="230">New Zealand</option>
                                        <option value="231">Nicaragua</option>
                                        <option value="232">Niger</option>
                                        <option value="233">Nigeria</option>
                                        <option value="234">Niue</option>
                                        <option value="235">Norfolk Island</option>
                                        <option value="236">Northern Mariana Islands</option>
                                        <option value="237">Norway</option>
                                        <option value="238">Oman</option>
                                        <option value="239">Pakistan</option>
                                        <option value="240">Palau</option>
                                        <option value="241">Palestinian Territory, Occupied</option>
                                        <option value="242">Panama</option>
                                        <option value="243">Papua New Guinea</option>
                                        <option value="244">Paraguay</option>
                                        <option value="245">Peru</option>
                                        <option value="246">Philippines</option>
                                        <option value="247">Pitcairn</option>
                                        <option value="248">Poland</option>
                                        <option value="249">Portugal</option>
                                        <option value="250">Puerto Rico</option>
                                        <option value="251">Qatar</option>
                                        <option value="252">Reunion</option>
                                        <option value="253">Romania</option>
                                        <option value="254">Russian Federation</option>
                                        <option value="255">Rwanda</option>
                                        <option value="256">Saint Helena</option>
                                        <option value="257">Saint Kitts and Nevis</option>
                                        <option value="258">Saint Lucia</option>
                                        <option value="259">Saint Pierre and Miquelon</option>
                                        <option value="260">Saint Vincent and The Grenadines</option>
                                        <option value="261">Samoa</option>
                                        <option value="262">San Marino</option>
                                        <option value="263">Sao Tome and Principe</option>
                                        <option value="264">Saudi Arabia</option>
                                        <option value="265">Senegal</option>
                                        <option value="266">Serbia</option>
                                        <option value="267">Seychelles</option>
                                        <option value="268">Sierra Leone</option>
                                        <option value="269">Singapore</option>
                                        <option value="270">Slovakia</option>
                                        <option value="271">Slovenia</option>
                                        <option value="272">Solomon Islands</option>
                                        <option value="273">Somalia</option>
                                        <option value="274">South Africa</option>
                                        <option value="275">South Georgia and The South Sandwich Islands</option>
                                        <option value="276">Spain</option>
                                        <option value="277">Sri Lanka</option>
                                        <option value="326">Srilanka</option>
                                        <option value="278">Sudan</option>
                                        <option value="279">Suriname</option>
                                        <option value="280">Svalbard and Jan Mayen</option>
                                        <option value="281">Swaziland</option>
                                        <option value="282">Sweden</option>
                                        <option value="283">Switzerland</option>
                                        <option value="284">Syrian Arab Republic</option>
                                        <option value="285">Taiwan</option>
                                        <option value="286">Tajikistan</option>
                                        <option value="287">Tanzania, United Republic of</option>
                                        <option value="288">Thailand</option>
                                        <option value="289">Timor-leste</option>
                                        <option value="290">Togo</option>
                                        <option value="291">Tokelau</option>
                                        <option value="292">Tonga</option>
                                        <option value="293">Trinidad and Tobago</option>
                                        <option value="294">Tunisia</option>
                                        <option value="295">Turkey</option>
                                        <option value="296">Turkmenistan</option>
                                        <option value="297">Turks and Caicos Islands</option>
                                        <option value="298">Tuvalu</option>
                                        <option value="299">Uganda</option>
                                        <option value="300">Ukraine</option>
                                        <option value="301">United Arab Emirates</option>
                                        <option value="302">United Kingdom</option>
                                        <option value="303">United States</option>
                                        <option value="304">United States Minor Outlying Islands</option>
                                        <option value="305">Uruguay</option>
                                        <option value="306">Uzbekistan</option>
                                        <option value="307">Vanuatu</option>
                                        <option value="308">Venezuela</option>
                                        <option value="309">Viet Nam</option>
                                        <option value="310">Virgin Islands, British</option>
                                        <option value="311">Virgin Islands, U.S.</option>
                                        <option value="312">Wallis and Futuna</option>
                                        <option value="313">Western Sahara</option>
                                        <option value="314">Yemen</option>
                                        <option value="315">Zambia</option>
                                        <option value="316">Zimbabwe</option>

                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select id="StateID" name="StateID" className="form-control inputfield ">
                                        <option value="0" className="textcolor">Select Province </option>

                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select id="CityID" name="CityID" className="form-control inputfield ">
                                        <option value="0" className="textcolor">Select City </option>

                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row leavereq">
                                <div className="col-lg-2">
                                    <p className="newFont">Barangay <span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Company Bank ACC NO <span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">CompanyId Code <span style={{ color: "red" }}>*</span></p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-lg-2">
                                    <select id="Barangay" name="Barangay" className="form-control inputfield ">
                                        <option value="0" className="textcolor">Select Barangay </option>
                                        <option value="Anunas" className="textcolor">Anunas</option>

                                        <option value="Balibago" className="textcolor">Balibago </option>

                                        <option value="Capaya" className="textcolor">Capaya </option>

                                    </select>
                                </div>
                                <div className="col-md-2"><input placeholder="Company Bank AccNo" name="CompanyBankAccNo" id="CompanyBankAccNo" className="form-control inputfield " /></div>
                                <div className="col-md-2"><input placeholder="CompanyCode" name="CompanyCode" id="CompanyCode" className="form-control inputfield " /></div>
                            </div>
                            <br />
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <p className="newFont">E-Signatory</p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2">

                                <div className={profile.Dropzone} {...getRootProps()}><input {...getInputProps()} />
                                 { isDragActive ?
                                 <p>Drop the files here ...</p> : <p>Drag n drop some files here, or click to select files</p>
                                 }
                                 </div>

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-2">
                                    <button className="form-control SubmitBTN" style={{ backgroundColor: "#3247D5" }}>UPDATE</button>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                            <div className="col-md-1"></div>
                        </form>
                        </div>
                        <div className={profile.card}>
                            <div className="row">
                                <div className="col-lg-12 negative-padding">
                                    <p className="companyinfo">WORK POLICY</p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <p className="newFont">Work Days Per Year<span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Work Hours Per Day</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Work Months Per Year<span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Daily Rate Factor<span style={{ color: "red" }}>*</span></p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2"><input className="form-control inputfield " /></div>
                                <div className="col-md-2"><input className="form-control inputfield " /></div>
                                <div className="col-md-2">
                                    <select className="form-control inputfield ">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="col-md-2"><input className="form-control inputfield " /></div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-2">
                                    <button className="form-control SubmitBTN" style={{ backgroundColor: "#3247D5" }}>UPDATE</button>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                        </div>
                        <br />
                        <div className={profile.card}>
                            <div className="row">
                                <div className="col-lg-12 negative-padding">
                                    <p className="companyinfo">PAYROLL COMPUTATION</p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <p className="newFont"> Periods Per Month<span style={{ color: "red" }}>*</span></p>
                                </div>
                                <div className="col-md-5">
                                    <p className="newFont">Absent Deduction</p>
                                </div>
                                <div className="col-md-5">
                                    <p className="newFont">Late Deduction</p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <select className="form-control inputfield ">
                                        <option value="1 Monthly">1 Monthly</option>
                                        <option value="2(Semi-Monthly)">2 Semi-Monthly</option>
                                    </select>
                                </div>
                                <div className="col-md-5">
                                    <div className={profile.card}>
                                        <div className="row">
                                            <div className="col-lg-3"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Absent_Deduction_BasicSalary" value="Absent_Deduction_BasicSalary" className="checkboxtxt " /><label for="Absent_Deduction_BasicSalary" className="newFont"> Basic Salary</label><br /></div>
                                            <div className="col-lg-4"><input type="checkbox" id="Absent_Deduction_Deminimis" name="Absent_Deduction_Deminimis" value="Absent_Deduction_Deminimis" className="checkboxtxt " /><label for="Deminimis1" className="newFont">Deminimis</label></div>
                                            <div className="col-lg-4"><input type="checkbox" id="Absent_Deduction_Allowance" name="Absent_Deduction_Allowance" value="Absent_Deduction_Allowance" className="checkboxtxt " /><label for="Allowance1" className="newFont">Allowance</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Absent_Deduction_Reimbursement" value="Absent_Deduction_Reimbursement" className="checkboxtxt " /><label for="Reimbursement_Allowance1" className="newFont">Reimbursement Allowance</label></div>
                                            <div className="col-lg-3"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Absent_Deduction_ECOLA" value="Absent_Deduction_ECOLA" className="checkboxtxt " /><label for="ECOLA1" className="newFont">ECOLA</label></div>
                                            <div className="col-lg-3"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Absent_Deduction_Bonus" value="Absent_Deduction_Bonus" className="checkboxtxt " /><label for="Bonus1" className="newFont">Bonus</label></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className={profile.card}>
                                        <div className="row">
                                            <div className="col-lg-4"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Late_Deduction_Basic_Salary" value="Late_Deduction_Basic_Salary" className="checkboxtxt " /><label className="newFont">Basic Salary</label></div>
                                            <div className="col-lg-4"><input type="checkbox" id="Late_Deduction_Deminimis" name="Late_Deduction_Deminimis" value="Late_Deduction_Deminimis" className="checkboxtxt " /><label className="checkboxtxt newFont">Deminimis</label></div>
                                            <div className="col-lg-4"><input type="checkbox" id="Late_Deduction_Allowance" name="Late_Deduction_Allowance" value="Late_Deduction_Allowance" className="checkboxtxt " /><label className="checkboxtxt newFont">Allowance</label></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6"><input type="checkbox" id="Late_Deduction_Reimbursement" name="Late_Deduction_Reimbursement" value="Late_Deduction_Reimbursement" className="checkboxtxt " /><label className="checkboxtxt newFont">Reimbursement Allowance</label></div>
                                            <div className="col-lg-3"><input type="checkbox" id="Late_Deduction_ECOLA" name="Late_Deduction_ECOLA" value="Late_Deduction_ECOLA" className="checkboxtxt " /><label className="checkboxtxt newFont">ECOLA</label></div>
                                            <div className="col-lg-3"><input type="checkbox" id="Late_Deduction_Bonus" name="Late_Deduction_Bonus" value="Late_Deduction_Bonus" className="checkboxtxt " /><label className="checkboxtxt newFont">Bonus</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row leavereq">
                                <div className="col-md-12">
                                    <p className="newFont">Govt Contributions </p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-1"></div>
                                <div className="col-md-1">
                                    <p className="newFont">SSS:</p>
                                </div>
                                <div className="col-md-1">
                                    <div className="row">
                                        <div className="form-check"><input type="radio" id="sss" name="sss" className="form-check-input " /><label for="flexRadioDefault2" className="form-check-label newFont"> Yes </label></div>
                                        <div className="form-check"><input type="radio" id="sss" name="sss" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> No </label></div>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <p className="newFont">Pagibig:</p>
                                </div>
                                <div className="col-lg-1">
                                    <div className="row">
                                        <div className="form-check"><input type="radio" id="pagibig" name="pagibig" className="form-check-input " /><label for="flexRadioDefault2" className="form-check-label newFont"> Yes </label></div>
                                        <div className="form-check"><input type="radio" id="pagibig" name="pagibig" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> No </label></div>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <p className="newFont">Philhealth:</p>
                                </div>
                                <div className="col-md-2">
                                    <div className="row">
                                        <div className="form-check"><input type="radio" id="philhealth" name="philhealth" className="form-check-input " /><label for="flexRadioDefault2" className="form-check-label newFont"> Yes </label></div>
                                        <div className="form-check"><input type="radio" id="philhealth" name="philhealth" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> No </label></div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row leavereq">
                                <div className="col-md-12">
                                    <p className="newFont">Attendance Configuration</p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <p className="newFont">Attendance:</p>
                                </div>
                                <div className="col-md-1">
                                    <div className="row">
                                        <div className="form-check"><input type="radio" id="Attendance" name="Attendance" className="form-check-input " /><label for="flexRadioDefault2" className="form-check-label newFont"> Yes </label></div>
                                        <div className="form-check"><input type="radio" id="Attendance" name="Attendance" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> No </label></div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <p className="newFont">Undertime(min):</p>
                                </div>

                                <div className="col-lg-1">
                                    <div className="row">
                                        <div className="form-check"><input type="radio" id="Undertime" name="Undertime" className="form-check-input " /><label for="flexRadioDefault2" className="form-check-label newFont"> Yes </label></div>
                                        <div className="form-check"><input type="radio" id="Undertime" name="Undertime" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> No </label></div>
                                    </div>
                                </div>

                                <div className="col-md-1"><input className="form-control inputfield " /></div>

                                <div className="col-md-1">
                                    <p className="newFont">Late(min):</p>
                                </div>

                                <div className="col-md-1">
                                    <div className="row">
                                        <div className="form-check"><input type="radio" id="Late" name="Late" className="form-check-input " /><label for="flexRadioDefault2" className="form-check-label newFont"> Yes </label></div>
                                        <div className="form-check"><input type="radio" id="ProratedDaily" name="ProratedDaily" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> No </label></div>
                                    </div>
                                </div>

                                <div className="col-md-1"><input className="form-control inputfield " /></div>

                            </div>
                            <br /><br />

                            <div className={profile.card}>
                                <div className="row leavereq tiles">
                                    <div className="col-md-12">
                                        <p className="newFont">13th Month Computation</p>
                                    </div>
                                </div>
                                <div className="row leavereq tiles">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5">
                                        <p className="newFont"> Computation Type:</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-check"><input type="radio" id="thirteen_Month_Compuatation_Type" name="thirteen_Month_Compuatation_Type" value="Pro-rated/Current/Full Salary" className="form-check-input " /><label for="proratedadvance2" className="form-check-label newFont"> Pro-rated/Current/Full Salary </label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                                <div className="row leavereq tiles">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-1">
                                        <p className="newFont">Optional:</p>
                                    </div>
                                    <div className="col-md-2"><input type="checkbox" id="ComputationBasic" name="ComputationBasic" value="ComputationBasicAdjustment" className="form-check-input " /><label className="checkboxtxt newFont">Basic</label></div>
                                </div>
                                <div className="row leavereq tiles">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2"><input type="checkbox" id="ComputationDeminimis" name="ComputationDeminimis" value="ComputationDeminimis" className="form-check-input " /><label className="checkboxtxt newFont">Deminimis</label></div>
                                </div>
                            </div>

                            <br />
                            <div className="row leavereq">
                                <div className="col-md-12">
                                    <p className="newFont"> Final Pay Computation</p>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                    <p className="newFont">Deduct Absent?</p>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-check"><input type="radio" id="FinalPay_Deduct_Absent" name="FinalPay_Deduct_Absent" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> Yes </label></div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-check"><input type="radio" id="FinalPay_Deduct_Absent" name="FinalPay_Deduct_Absent" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> No </label></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="newFont">Deduct Late/Undertime?</p>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-check"><input type="radio" id="FinalPay_Deduct_Late" name="FinalPay_Deduct_Late" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> Yes </label></div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-check"><input type="radio" id="FinalPay_Deduct_Late" name="FinalPay_Deduct_Late" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> No </label></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="newFont">Include 13th Month Pay?</p>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-check"><input type="radio" id="Final_Pay_13th_Month" name="Final_Pay_13th_Month" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> Yes </label></div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-check"><input type="radio" id="Final_Pay_13th_Month" name="Final_Pay_13th_Month" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> No </label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-2">
                                    <button className="form-control SubmitBTN" style={{ backgroundColor: "#3247D5" }}>UPDATE</button>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                        </div>
                        <br />
                        <div className={profile.card}>
                            <div className="row">
                                <div className="col-lg-12 negative-padding">
                                    <p className="companyinfo">TAX COMPUTATIONS</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-2"><label className="newFont">Payroll Calendar</label></div>
                                <div className="col-lg-6">
                                    <div className="form-check"><input type="checkbox" id="PayRoll_Calender" name="PayRoll_Calender" className="form-check-input " value="true" /><label for="flexRadioDefault1" className="form-check-label newFont"> Calendar Year(From January to December) </label></div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <p className="newFont">Tax Calculation:</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="form-check"><input type="radio" id="taxcomputationtype" name="taxcomputationtype" className="form-check-input " /><label for="flexRadioDefault2" className="form-check-label newFont"> Semi Monthly </label></div>
                                        <div className="form-check"><input type="radio" id="taxcomputationtype" name="taxcomputationtype" className="form-check-input " /><label for="flexRadioDefault1" className="form-check-label newFont"> Annual </label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"><label className="newFont">Non-Tax Exemption Ceiling<span style={{ color: "red" }}>*</span></label></div>
                                <div className="col-lg-4"><label className="newFont">Deminimis Exemption Ceiling<span style={{ color: "red" }}>*</span></label></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"><input placeholder="20,50,000" className="form-control " /></div>
                                <div className="col-lg-4"><input placeholder="90,00,000" className="form-control " /></div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-2">
                                <button className="form-control SubmitBTN" style={{ backgroundColor: "#3247D5" }}>UPDATE</button>
                            </div>
                            <div className="col-lg-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default CompanyProfile