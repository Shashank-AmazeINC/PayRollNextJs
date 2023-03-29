import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo_digiOffice_White.png'
import bell from '../public/notification.png'
import HeaderStyle from '../styles/Header.module.css'
import Clock from 'react-live-clock'
import dynamic from 'next/dynamic'
function Header() {
    return (
        <div>

            <div id={HeaderStyle.header} className='row' >
                <div className='col-2'>
                    <Image
                        src={logo}
                        alt='logo'
                        width={145}
                        height={53}
                    />
                </div>
                <div id={HeaderStyle.clock} className='col-2'>
                    <Clock
                        format={'h:mm:ss A'}
                        style={{ fontSize: '1.8em' }}
                        ticking={true} />
                </div>
                <div className='col-5'>

                </div>
                <div id={HeaderStyle.notification} className='col-2 mt-2'>
                    <Image
                        src={bell}
                        alt='notifaction'
                        width={32}
                        height={30}
                    />
                </div>
                <div className='col-1'>

                </div>
            </div>
        </div>

    )
}
export default dynamic(() => Promise.resolve(Header), { ssr: false })
