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
import dashStyle from '../../../styles/Sidebar.module.css'
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';
import dynamic from 'next/dynamic';
import { TbReportSearch } from 'react-icons/tb';
import { RiMastodonFill } from 'react-icons/ri';
function SideBar
    () {

    return (
        <div className='mt-3' style={{ whitespace: "normal" }}>

            <ProSidebarProvider>
                <Sidebar className={dashStyle.sidenav}>
                    <Menu >
                        <MenuItem icon={<AiOutlineHome color='blue' />}>  <Link href="/dash" className={dashStyle.dashLink}> HOME</Link></MenuItem>
                        <MenuItem icon={<MdOutlinePeopleAlt color='blue' />}>  <Link href="/components/layout/AddressDetailsWizard" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                        <SubMenu icon={<FcCalendar color='blue' />} label=" ATTENDANCE" >

                            <MenuItem className={dashStyle.Menu} icon={<FcCalendar color='blue' />} > <Link href="/components/layout/AttendenceDetails" className={dashStyle.dashLink}>  ATTENDANCE DETAILS</Link>  </MenuItem>
                            <MenuItem className={dashStyle.Menu} icon={<FcCalendar color='blue' />}> <Link href="/HDMF" className={dashStyle.dashLink}> OVERTIME UNITS UPLOAD</Link>   </MenuItem>

                        </SubMenu>
                        <SubMenu icon={<MdCoPresent color='blue' />} label="LOANS">
                            <MenuItem icon={<MdCoPresent color='blue' />}>LOANS UPLOAD <Link href="/loan upload" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                        </SubMenu>
                        <SubMenu icon={<GiStairsGoal color='blue' />} label="PAYROLL">
                            <MenuItem icon={<GiStairsGoal color='blue' />}>PAYROLL YTD UPLOAD<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GiStairsGoal color='blue' />}> INITIAL PAYROLL<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GiStairsGoal color='blue' />}> INITIAL PAYROLL DETAILS<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GiStairsGoal color='blue' />}> RUN FINAL PAYROLL<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GiStairsGoal color='blue' />}> FINAL PAYROLL APPROVAL<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GiStairsGoal color='blue' />}> FINAL PAYROLL DETAILS<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GiStairsGoal color='blue' />}> BANK ADVICE LIST<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GiStairsGoal color='blue' />}> STAFF SALARY<Link href="/components/layout//StaffSalaryComponent" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GiStairsGoal color='blue' />}> PAYROLL COMPONENT BULK<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                        </SubMenu>
                        <SubMenu icon={<GrUserSettings color='blue' />} label="SETTINGS">
                            <MenuItem icon={<GrUserSettings color='blue' />}> COMPONENT MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GrUserSettings color='blue' />}> COMPONENT MAPPING<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GrUserSettings color='blue' />}> BIR2316 MAPPING<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<GrUserSettings color='blue' />}> PAYPERIOD SETTINGS<Link href="/components/layout//PayperiodSettingsDash" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
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
                            <MenuItem icon={<RiMastodonFill color='blue' />}> LEAVE TYPE<Link href="/components/layout/LevelTypeDash" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> LOAN TYPE<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> SHIFT MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> COUNTRY MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> PROVINCE MASTER<Link href="/components/layout/StateMasterDash" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> CITY MASTER<Link href="/components/layout/CityMasterForm" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> BARANGAY MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> DEPARTMENT MASTER<Link href="" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> DIVISION MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> WORK LOCATION MASTER<Link href="/components/layout/WorkLocationMasterDash" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> BAND MASTER<Link href="/components/layout/BrandMasterForm" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> SUBSIDIARY MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> OT MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> POSITION-MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> JOB LEVEL TYPE<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> GROUP MASTER<Link href="/components/layout/GroupMaster" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
                            <MenuItem icon={<RiMastodonFill color='blue' />}> SUB-SECTION MASTER<Link href="/staff" className={dashStyle.dashLink}> STAFF</Link></MenuItem>
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
