import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { MdCoPresent } from 'react-icons/md';
import { GrUserSettings } from 'react-icons/gr';
import { GiStairsGoal } from 'react-icons/gi';
import { FcCalendar } from 'react-icons/fc';
import { FaHandsHelping } from 'react-icons/fa';
import { FcCustomerSupport } from 'react-icons/fc';
import dashStyle from '../styles/Sidebar.module.css'
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';
import dynamic from 'next/dynamic';
import { TbReportSearch } from 'react-icons/tb';
import { RiMastodonFill } from 'react-icons/ri';
function SideBar
    () {

    return (
        <div className='mt-3'style={{position:"fixed"}} >
                <ProSidebarProvider>
                    <Sidebar className={dashStyle.sidenav}>
                        <Menu >
                            <MenuItem icon={<AiOutlineHome color='blue' />}>  <Link href="/" className={dashStyle.dashLink}> HOME</Link></MenuItem>
                            <MenuItem icon={<MdOutlinePeopleAlt color='blue' />}>  <Link href='/AddressDetailsWizard'> STAFF</Link></MenuItem>
                            <SubMenu icon={<FcCalendar color='blue' />} label=" ATTENDANCE" >

                                <MenuItem className={dashStyle.Menu} icon={<FcCalendar color='blue' />} >
                                    <Link href='/AttendenceDetails'className={dashStyle.dashLink}>  ATTENDANCE DETAILS</Link></MenuItem>
                                <MenuItem className={dashStyle.Menu} icon={<FcCalendar color='blue' />}> <Link href='/myTeamOverTimeDetails' className={dashStyle.dashLink}> OVERTIME UNITS UPLOAD</Link></MenuItem>

                            </SubMenu>
                            <SubMenu icon={<MdCoPresent color='blue' />} label="LOANS">
                                <MenuItem icon={<MdCoPresent color='blue' />}> <Link href="/loan upload" className={dashStyle.dashLink}> LOANS UPLOAD</Link></MenuItem>
                            </SubMenu>
                            <SubMenu icon={<GiStairsGoal color='blue' />} label="PAYROLL">
                                <MenuItem icon={<GiStairsGoal color='blue' />}><Link href="/staff" className={dashStyle.dashLink}>PAYROLL YTD UPLOAD</Link></MenuItem>
                                <MenuItem icon={<GiStairsGoal color='blue' />}><Link href="/staff" className={dashStyle.dashLink}>INITIAL PAYROLL</Link></MenuItem>
                                <MenuItem icon={<GiStairsGoal color='blue' />}> <Link href="/staff" className={dashStyle.dashLink}> INITIAL PAYROLL DETAILS</Link></MenuItem>
                                <MenuItem icon={<GiStairsGoal color='blue' />}><Link href='/Runpayroll' className={dashStyle.dashLink}>RUN FINAL PAYROLL</Link></MenuItem>
                                <MenuItem icon={<GiStairsGoal color='blue' />}> <Link href="/staff" className={dashStyle.dashLink}> FINAL PAYROLL APPROVAL</Link></MenuItem>
                                <MenuItem icon={<GiStairsGoal color='blue' />}> <Link href="/staff" className={dashStyle.dashLink}> FINAL PAYROLL DETAILS</Link></MenuItem>
                                <MenuItem icon={<GiStairsGoal color='blue' />}> <Link href="/staff" className={dashStyle.dashLink}> BANK ADVICE LIST</Link></MenuItem>
                                <MenuItem icon={<GiStairsGoal color='blue' />}> <Link href="/StaffSalaryComponent" className={dashStyle.dashLink}> STAFF SALARY</Link></MenuItem>
                                <MenuItem icon={<GiStairsGoal color='blue' />}><Link href="/PayrollComponentBulkUpload" className={dashStyle.dashLink}> PAYROLL COMPONENT BULK</Link></MenuItem>
                            </SubMenu>
                            <SubMenu icon={<GrUserSettings color='blue' />} label="SETTINGS">
                                <MenuItem icon={<GrUserSettings color='blue' />}> COMPONENT MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<GrUserSettings color='blue' />}> COMPONENT MAPPING<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<GrUserSettings color='blue' />}> BIR2316 MAPPING<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<GrUserSettings color='blue' />}> <Link href="/PayperiodSettingsDash" className={dashStyle.dashLink}> PAYPERIOD SETTINGS</Link></MenuItem>
                            </SubMenu>
                            <SubMenu icon={<TbReportSearch color='blue' />} label="REPORTS">
                                <MenuItem icon={<TbReportSearch color='blue' />}>PAYROLL VARIANCE<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> SALARY CARD DETAILS<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> SALLARY SUMMARY<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> CAREER TRANSISTION<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> AMMORTIZATION<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> MONTHLY INSTALMENT REPORT<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> MONTHLY REPORT<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> PAYROLL SUMMARY<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> YTD REPORT<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> YTD ADJUSTMENTS<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> PAYSLIP<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> SSS<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> PHILHEALTH<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> PAG-IBIG<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> BIR<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> CONTRIBUTION CERTIFICATE<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<TbReportSearch color='blue' />}> CERTIFICATE OF LOAN<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            </SubMenu>
                            <SubMenu icon={<RiMastodonFill color='blue' />} label="MASTERS">
                                <MenuItem icon={<RiMastodonFill color='blue' />}> <Link href="/LeaveTypeDashboard" className={dashStyle.dashLink}> LEAVE TYPE</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> LOAN TYPE<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> SHIFT MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> COUNTRY MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> <Link href="/StateMasterDash" className={dashStyle.dashLink}> PROVINCE MASTER</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> <Link href="/CityMasterDash" className={dashStyle.dashLink}> CITY MASTER</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> <Link href="/BarangayMasterForm" className={dashStyle.dashLink}> BARANGAY MASTER</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> DEPARTMENT MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> DIVISION MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> <Link href="/WorkLocationMasterDash" className={dashStyle.dashLink}> WORK LOCATION MASTER</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> <Link href="/BrandMasterDashboard" className={dashStyle.dashLink}> BAND MASTER</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> <Link href="/SubsidaryMasterForm" className={dashStyle.dashLink}> SUBSIDIARY MASTER</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> OT MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> POSITION-MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> JOB LEVEL TYPE<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> <Link href="/GroupMaster" className={dashStyle.dashLink}> GROUP MASTER</Link></MenuItem>
                                <MenuItem icon={<RiMastodonFill color='blue' />}> <Link href="/SubSectionMasterForm" className={dashStyle.dashLink}> SUB-SECTION MASTER</Link></MenuItem>
                            </SubMenu>
                            <MenuItem icon={<FaHandsHelping color='blue' />}> HELP </MenuItem>
                            <MenuItem icon={<FcCustomerSupport color='red' />}>  SUPPORT TICKETS </MenuItem>
                        </Menu>
                    </Sidebar>
                </ProSidebarProvider>
        </div>
    )
}

export default dynamic(() => Promise.resolve(SideBar), { ssr: false })
