import React, { Fragment } from 'react';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import ModalWindow from '../Modal/ModalWindow'
import '../../Styles/Home.css'
import SquadSection from '../SquadSection/SquadSection';



function Home() {
    
    return (
        <Fragment>

            <NavBar />

            <Search />

            <ModalWindow />

            <SquadSection />

            <Footer />
            
        </Fragment>
    )
}

export default Home
