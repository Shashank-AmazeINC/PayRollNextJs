import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Login from './login';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

;
export const siteTitle = 'Sample Website';

export default function Layout({ children, home }) {

    const [isLogin, setILogin] = useState("no");
    const [pageName, setPageName] = useState("Dashboard");
    const [userName, setusernameName] = useState("");

    useEffect(() => {
        console.log("layout rendered");
        let login = sessionStorage.getItem("isLogin");
        if (login && login == "yes") {
            setILogin("yes");
        }
        else {
            setILogin("no");
        }
        setusernameName(sessionStorage.getItem("userName"));
        let pn = sessionStorage.getItem("pageName");
        if (pn) {
            setPageName(pn);
        }
    }, []);

    function login() {
        setILogin("yes");
        sessionStorage.setItem("isLogin", "yes");
        setusernameName(sessionStorage.getItem("userName"));
        location.href = "/masters/dashboard";
    }

    function logout() {
        setILogin("no");
        sessionStorage.clear();
        sessionStorage.setItem("isLogin", "no");
        location.href = "/";
    }

    function changePageName(data) {
        sessionStorage.setItem("pageName", data);
        setPageName(data);
    }

    if (isLogin == "yes") {
        return (
            <div className={styles.divNegate}>
                <Head>
                    <title>Next Js Quoting Tool</title>
                </Head>
                <div className='row'>
                    <div className='col-lg-2'>
                        <Sidebar applyPageName={changePageName}></Sidebar>
                    </div>
                    <div className='col-lg-10' style={{ backgroundColor: '#f5f8fb' }}>
                        <Header makelogout={logout} pageName={pageName} userName={userName}></Header>
                        <main style={{ height: '90vh', overflowY: 'auto' }}>{children}</main>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.divNegate}>
                <Head>
                    <title>Next Js Quoting Tool</title>
                </Head>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Login makelogin={login}></Login>
                    </div>
                </div>
            </div>
        )
    }
}