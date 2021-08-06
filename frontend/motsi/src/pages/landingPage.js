import React from 'react';
import HeaderLP from '../components/HeaderLP';
import FeedLP from '../components/FeedLP';
import '../pages/styles/landingPage.css';
import DescriptionLP from "../components/DescriptionLP";
import Footer from '../components/Footer';


// ES7 snippets to do 'rfce'

function landingPage() {
    return (
        <div className='landing_page'>
            <div>
                <HeaderLP/>
            </div>
            <DescriptionLP/>
            <div id="feed">
                <FeedLP/>
            </div>
            <Footer/>
        </div>
    )
}

export default landingPage