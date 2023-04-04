import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
  /* return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <Header />
        </div>
        <br/><br/>
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          <div className='col-10'>
            <Component {...pageProps} />
           
          </div>
         
        </div>
      </div>


    </div> */
  // )
// }
