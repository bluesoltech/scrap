import React from 'react'
import Header from '../assets/component/Header'
import Routers from '../routes/Routers'
import Footer from '../assets/component/Footer'

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Routers />
            </main>
            <Footer />
        </div>
    )
}

export default Layout