import LayoutContainer from '../components/layout-container'
import Navbar from '../components/navbar/index.jsx'
import Footer from '../components/footer';
import Head from 'next/head';
import '../../styles/globals.css'

function AppLayout({ Component, pageProps }) {
  return(
      <LayoutContainer>
        <Head>
          <title>Octobear Hub</title>
        </Head>
        <Navbar />
        <Component className="mb-auto flex-grow" {...pageProps} />
        <Footer />
      </LayoutContainer>
  ) 
}

export default AppLayout;
