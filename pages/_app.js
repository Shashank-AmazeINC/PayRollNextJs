import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/pages/components/layout/Header';
import Sidebar from '@/pages/components/layout/Sidebar';
import Footer from '@/pages/components/layout/Footer';
export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          <div className='col-10'>
            <Component {...pageProps} />
            <Footer/>
          </div>
         
        </div>
      </div>


    </div>
  )
}
