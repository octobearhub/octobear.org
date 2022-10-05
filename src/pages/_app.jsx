/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Head from "next/head"
import PropTypes from "prop-types"
import LayoutContainer from "../components/layout-container"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "../../styles/globals.css"

function AppLayout({ Component, pageProps }) {
    return (
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
AppLayout.propTypes = {
    Component: PropTypes.elementType.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: PropTypes.object.isRequired,
}

export default AppLayout
