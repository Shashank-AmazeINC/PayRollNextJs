import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ makelogin }) {
  return (
    <Layout home>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-9'>

        </div>
        <div className='col-lg-3'>
          <button type='button' onClick={makelogin}>Login</button>
        </div>
      </div>
    </div>
  </Layout>
  )
}
