import React from 'react'
import profile from '../styles/companyprofile.module.css'
function CompanyProfile() {
    return (
        <div>
            <div className={profile.card}>
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-lg-12">
                            <p class="Heading1">Company Profile</p>
                        </div>
                    </div>
                    <div class={profile.card}>
                        <div class="row">
                            <div class="col-lg-12 negative-padding">
                                <p class="companyinfo">Company Information</p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-2">
                                <p class="newFont">Company Logo</p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont"> Company Name<span style={{ color: "red" }}>*</span></p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Nature of Business</p>
                            </div>
                            <div class="col-md-3">
                                <p class="newFont">Address1</p>
                            </div>
                            <div class="col-md-3">
                                <p class="newFont">Address2</p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-2">

                                <input type="file" id="undefined" multiple="" accept="*" />
                                Drop it here!


                            </div>
                            <div class="col-md-2"><input placeholder="" class="form-control inputfield " /></div>
                            <div class="col-md-2"><input placeholder="" class="form-control inputfield " /></div>
                            <div class="col-md-3"><textarea placeholder="Address1" class="form-control inputfield "></textarea></div>
                            <div class="col-md-3"><textarea placeholder="Address2" class="form-control inputfield "></textarea></div>
                        </div>
                        <br />
                        <div class="row leavereq">
                            <div class="col-md-2">
                                <p class="newFont">Zip Code</p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">RDO</p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Email</p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Phone</p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Fax</p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">TIN <span style={{ color: "red" }}>*</span></p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-2"><input placeholder="" class="form-control inputfield " /></div>
                            <div class="col-md-2"><input placeholder="" class="form-control inputfield " /></div>
                            <div class="col-md-2"><input placeholder="" class="form-control inputfield " /></div>
                            <div class="col-md-2"><input placeholder="" onkeypress="return /[0-9]/i.test(event.key)" maxlength="11" class="form-control inputfield " /></div>
                            <div class="col-md-2"><input placeholder="" class="form-control inputfield " /></div>
                            <div class="col-md-2">
                                <input type="text" onkeypress="return /[0-9]/i.test(event.key)" maxlength="9" placeholder="Employee TIN" id="Tin" name="Tin" class="form-control " />
                            </div>
                        </div>
                        <br />
                        <div class="row leavereq">
                            <div class="col-md-2">
                                <p class="newFont">SSS No. <span style={{ color: "red" }}>*</span></p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">PhilHealth No. <span style={{ color: "red" }}>*</span></p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">HDMF No. <span style={{ color: "red" }}>*</span></p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Country</p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Province</p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">City</p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-2">
                                <input type="text" onkeypress="return /[0-9]/i.test(event.key)" maxlength="10" placeholder="SSS No" id="SSN_No" name="SSN_No" class="form-control " />
                            </div>
                            <div class="col-md-2">
                                <input type="text" onkeypress="return /[0-9]/i.test(event.key)" maxlength="12" placeholder="PhilHealth No" id="PhilHealthNumber" name="PhilHealthNumber" class="form-control " />
                            </div>
                            <div class="col-md-2"><input placeholder="" class="form-control inputfield " /></div>
                            <div class="col-md-2">
                                <select id="CountryID" name="CountryID" class="form-control inputfield ">
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
                            <div class="col-md-2">
                                <select id="StateID" name="StateID" class="form-control inputfield ">
                                    <option value="0" class="textcolor">Select Province </option>

                                </select>
                            </div>
                            <div class="col-md-2">
                                <select id="CityID" name="CityID" class="form-control inputfield ">
                                    <option value="0" class="textcolor">Select City </option>

                                </select>
                            </div>
                        </div>
                        <br />
                        <div class="row leavereq">
                            <div class="col-lg-2">
                                <p class="newFont">Barangay <span style={{ color: "red" }}>*</span></p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Company Bank ACC NO <span style={{ color: "red" }}>*</span></p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">CompanyId Code <span style={{ color: "red" }}>*</span></p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-lg-2">
                                <select id="Barangay" name="Barangay" class="form-control inputfield ">
                                    <option value="0" class="textcolor">Select Barangay </option>
                                    <option value="Anunas" class="textcolor">Anunas</option>

                                    <option value="Balibago" class="textcolor">Balibago </option>

                                    <option value="Capaya" class="textcolor">Capaya </option>

                                </select>
                            </div>
                            <div class="col-md-2"><input placeholder="Company Bank AccNo" name="CompanyBankAccNo" id="CompanyBankAccNo" class="form-control inputfield " /></div>
                            <div class="col-md-2"><input placeholder="CompanyCode" name="CompanyCode" id="CompanyCode" class="form-control inputfield " /></div>
                        </div>
                        <br />
                        <div class="row leavereq">
                            <div class="col-md-2">
                                <p class="newFont">E-Signatory</p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-2">

                                <input type="file" id="undefined" multiple="" accept="*" />
                                Drop it here!


                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-lg-4"></div>
                            <div class="col-lg-2">
                                <button class="form-control SubmitBTN" style={{ backgroundColor: "#3247D5" }}>UPDATE</button>
                            </div>
                            <div class="col-lg-4"></div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                    <div class={profile.card}>
                        <div class="row">
                            <div class="col-lg-12 negative-padding">
                                <p class="companyinfo">WORK POLICY</p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-2">
                                <p class="newFont">Work Days Per Year<span style={{ color: "red" }}>*</span></p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Work Hours Per Day</p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Work Months Per Year<span style={{ color: "red" }}>*</span></p>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Daily Rate Factor<span style={{ color: "red" }}>*</span></p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-2"><input class="form-control inputfield " /></div>
                            <div class="col-md-2"><input class="form-control inputfield " /></div>
                            <div class="col-md-2">
                                <select class="form-control inputfield ">
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
                            <div class="col-md-2"><input class="form-control inputfield " /></div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-lg-4"></div>
                            <div class="col-lg-2">
                                <button class="form-control SubmitBTN" style={{ backgroundColor: "#3247D5" }}>UPDATE</button>
                            </div>
                            <div class="col-lg-4"></div>
                        </div>
                    </div>
                    <br />
                    <div class={profile.card}>
                        <div class="row">
                            <div class="col-lg-12 negative-padding">
                                <p class="companyinfo">PAYROLL COMPUTATION</p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-2">
                                <p class="newFont"> Periods Per Month<span style={{ color: "red" }}>*</span></p>
                            </div>
                            <div class="col-md-5">
                                <p class="newFont">Absent Deduction</p>
                            </div>
                            <div class="col-md-5">
                                <p class="newFont">Late Deduction</p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-2">
                                <select class="form-control inputfield ">
                                    <option value="1 Monthly">1 Monthly</option>
                                    <option value="2(Semi-Monthly)">2 Semi-Monthly</option>
                                </select>
                            </div>
                            <div class="col-md-5">
                                <div class={profile.card}>
                                    <div class="row">
                                        <div class="col-lg-3"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Absent_Deduction_BasicSalary" value="Absent_Deduction_BasicSalary" class="checkboxtxt " /><label for="Absent_Deduction_BasicSalary" class="newFont"> Basic Salary</label><br /></div>
                                        <div class="col-lg-4"><input type="checkbox" id="Absent_Deduction_Deminimis" name="Absent_Deduction_Deminimis" value="Absent_Deduction_Deminimis" class="checkboxtxt " /><label for="Deminimis1" class="newFont">Deminimis</label></div>
                                        <div class="col-lg-4"><input type="checkbox" id="Absent_Deduction_Allowance" name="Absent_Deduction_Allowance" value="Absent_Deduction_Allowance" class="checkboxtxt " /><label for="Allowance1" class="newFont">Allowance</label></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Absent_Deduction_Reimbursement" value="Absent_Deduction_Reimbursement" class="checkboxtxt " /><label for="Reimbursement_Allowance1" class="newFont">Reimbursement Allowance</label></div>
                                        <div class="col-lg-3"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Absent_Deduction_ECOLA" value="Absent_Deduction_ECOLA" class="checkboxtxt " /><label for="ECOLA1" class="newFont">ECOLA</label></div>
                                        <div class="col-lg-3"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Absent_Deduction_Bonus" value="Absent_Deduction_Bonus" class="checkboxtxt " /><label for="Bonus1" class="newFont">Bonus</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class={profile.card}>
                                    <div class="row">
                                        <div class="col-lg-4"><input type="checkbox" id="Absent_Deduction_BasicSalary" name="Late_Deduction_Basic_Salary" value="Late_Deduction_Basic_Salary" class="checkboxtxt " /><label class="newFont">Basic Salary</label></div>
                                        <div class="col-lg-4"><input type="checkbox" id="Late_Deduction_Deminimis" name="Late_Deduction_Deminimis" value="Late_Deduction_Deminimis" class="checkboxtxt " /><label class="checkboxtxt newFont">Deminimis</label></div>
                                        <div class="col-lg-4"><input type="checkbox" id="Late_Deduction_Allowance" name="Late_Deduction_Allowance" value="Late_Deduction_Allowance" class="checkboxtxt " /><label class="checkboxtxt newFont">Allowance</label></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6"><input type="checkbox" id="Late_Deduction_Reimbursement" name="Late_Deduction_Reimbursement" value="Late_Deduction_Reimbursement" class="checkboxtxt " /><label class="checkboxtxt newFont">Reimbursement Allowance</label></div>
                                        <div class="col-lg-3"><input type="checkbox" id="Late_Deduction_ECOLA" name="Late_Deduction_ECOLA" value="Late_Deduction_ECOLA" class="checkboxtxt " /><label class="checkboxtxt newFont">ECOLA</label></div>
                                        <div class="col-lg-3"><input type="checkbox" id="Late_Deduction_Bonus" name="Late_Deduction_Bonus" value="Late_Deduction_Bonus" class="checkboxtxt " /><label class="checkboxtxt newFont">Bonus</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="row leavereq">
                            <div class="col-md-12">
                                <p class="newFont">Govt Contributions </p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-1"></div>
                            <div class="col-md-1">
                                <p class="newFont">SSS:</p>
                            </div>
                            <div class="col-md-1">
                                <div class="row">
                                    <div class="form-check"><input type="radio" id="sss" name="sss" class="form-check-input " /><label for="flexRadioDefault2" class="form-check-label newFont"> Yes </label></div>
                                    <div class="form-check"><input type="radio" id="sss" name="sss" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> No </label></div>
                                </div>
                            </div>
                            <div class="col-md-1">
                                <p class="newFont">Pagibig:</p>
                            </div>
                            <div class="col-lg-1">
                                <div class="row">
                                    <div class="form-check"><input type="radio" id="pagibig" name="pagibig" class="form-check-input " /><label for="flexRadioDefault2" class="form-check-label newFont"> Yes </label></div>
                                    <div class="form-check"><input type="radio" id="pagibig" name="pagibig" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> No </label></div>
                                </div>
                            </div>
                            <div class="col-md-1">
                                <p class="newFont">Philhealth:</p>
                            </div>
                            <div class="col-md-2">
                                <div class="row">
                                    <div class="form-check"><input type="radio" id="philhealth" name="philhealth" class="form-check-input " /><label for="flexRadioDefault2" class="form-check-label newFont"> Yes </label></div>
                                    <div class="form-check"><input type="radio" id="philhealth" name="philhealth" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> No </label></div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="row leavereq">
                            <div class="col-md-12">
                                <p class="newFont">Attendance Configuration</p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-1"></div>
                            <div class="col-md-2">
                                <p class="newFont">Attendance:</p>
                            </div>
                            <div class="col-md-1">
                                <div class="row">
                                    <div class="form-check"><input type="radio" id="Attendance" name="Attendance" class="form-check-input " /><label for="flexRadioDefault2" class="form-check-label newFont"> Yes </label></div>
                                    <div class="form-check"><input type="radio" id="Attendance" name="Attendance" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> No </label></div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <p class="newFont">Undertime(min):</p>
                            </div>

                            <div class="col-lg-1">
                                <div class="row">
                                    <div class="form-check"><input type="radio" id="Undertime" name="Undertime" class="form-check-input " /><label for="flexRadioDefault2" class="form-check-label newFont"> Yes </label></div>
                                    <div class="form-check"><input type="radio" id="Undertime" name="Undertime" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> No </label></div>
                                </div>
                            </div>

                            <div class="col-md-1"><input class="form-control inputfield " /></div>

                            <div class="col-md-1">
                                <p class="newFont">Late(min):</p>
                            </div>

                            <div class="col-md-1">
                                <div class="row">
                                    <div class="form-check"><input type="radio" id="Late" name="Late" class="form-check-input " /><label for="flexRadioDefault2" class="form-check-label newFont"> Yes </label></div>
                                    <div class="form-check"><input type="radio" id="ProratedDaily" name="ProratedDaily" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> No </label></div>
                                </div>
                            </div>

                            <div class="col-md-1"><input class="form-control inputfield " /></div>

                        </div>
                        <br /><br />
                       
                            <div class={profile.card}>
                                <div class="row leavereq tiles">
                                    <div class="col-md-12">
                                        <p class="newFont">13th Month Computation</p>
                                    </div>
                                </div>
                                <div class="row leavereq tiles">
                                    <div class="col-md-1"></div>
                                    <div class="col-md-5">
                                        <p class="newFont"> Computation Type:</p>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-check"><input type="radio" id="thirteen_Month_Compuatation_Type" name="thirteen_Month_Compuatation_Type" value="Pro-rated/Current/Full Salary" class="form-check-input " /><label for="proratedadvance2" class="form-check-label newFont"> Pro-rated/Current/Full Salary </label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                                <div class="row leavereq tiles">
                                    <div class="col-md-1"></div>
                                    <div class="col-md-1">
                                        <p class="newFont">Optional:</p>
                                    </div>
                                    <div class="col-md-2"><input type="checkbox" id="ComputationBasic" name="ComputationBasic" value="ComputationBasicAdjustment" class="form-check-input " /><label class="checkboxtxt newFont">Basic</label></div>
                                </div>
                                <div class="row leavereq tiles">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-2"><input type="checkbox" id="ComputationDeminimis" name="ComputationDeminimis" value="ComputationDeminimis" class="form-check-input " /><label class="checkboxtxt newFont">Deminimis</label></div>
                                </div>
                            </div>
                       
                        <br />
                        <div class="row leavereq">
                            <div class="col-md-12">
                                <p class="newFont"> Final Pay Computation</p>
                            </div>
                        </div>
                        <div class="row leavereq">
                            <div class="col-md-1"></div>
                            <div class="col-md-3">
                                <p class="newFont">Deduct Absent?</p>
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="form-check"><input type="radio" id="FinalPay_Deduct_Absent" name="FinalPay_Deduct_Absent" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> Yes </label></div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="form-check"><input type="radio" id="FinalPay_Deduct_Absent" name="FinalPay_Deduct_Absent" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> No </label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <p class="newFont">Deduct Late/Undertime?</p>
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="form-check"><input type="radio" id="FinalPay_Deduct_Late" name="FinalPay_Deduct_Late" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> Yes </label></div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="form-check"><input type="radio" id="FinalPay_Deduct_Late" name="FinalPay_Deduct_Late" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> No </label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <p class="newFont">Include 13th Month Pay?</p>
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="form-check"><input type="radio" id="Final_Pay_13th_Month" name="Final_Pay_13th_Month" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> Yes </label></div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="form-check"><input type="radio" id="Final_Pay_13th_Month" name="Final_Pay_13th_Month" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> No </label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-lg-4"></div>
                            <div class="col-lg-2">
                                <button class="form-control SubmitBTN" style={{ backgroundColor: "#3247D5" }}>UPDATE</button>
                            </div>
                            <div class="col-lg-4"></div>
                        </div>
                    </div>
                    <br />
                    <div class={profile.card}>
                        <div class="row">
                            <div class="col-lg-12 negative-padding">
                                <p class="companyinfo">TAX COMPUTATIONS</p>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-lg-2"><label class="newFont">Payroll Calendar</label></div>
                            <div class="col-lg-6">
                                <div class="form-check"><input type="checkbox" id="PayRoll_Calender" name="PayRoll_Calender" class="form-check-input " value="true" /><label for="flexRadioDefault1" class="form-check-label newFont"> Calendar Year(From January to December) </label></div>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-md-2">
                                <p class="newFont">Tax Calculation:</p>
                            </div>
                            <div class="col-md-4">
                                <div class="row">
                                    <div class="form-check"><input type="radio" id="taxcomputationtype" name="taxcomputationtype" class="form-check-input " /><label for="flexRadioDefault2" class="form-check-label newFont"> Semi Monthly </label></div>
                                    <div class="form-check"><input type="radio" id="taxcomputationtype" name="taxcomputationtype" class="form-check-input " /><label for="flexRadioDefault1" class="form-check-label newFont"> Annual </label></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4"><label class="newFont">Non-Tax Exemption Ceiling<span style={{ color: "red" }}>*</span></label></div>
                            <div class="col-lg-4"><label class="newFont">Deminimis Exemption Ceiling<span style={{ color: "red" }}>*</span></label></div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4"><input placeholder="20,50,000" class="form-control " /></div>
                            <div class="col-lg-4"><input placeholder="90,00,000" class="form-control " /></div>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-2">
                            <button class="form-control SubmitBTN" style={{ backgroundColor: "#3247D5" }}>UPDATE</button>
                        </div>
                        <div class="col-lg-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile