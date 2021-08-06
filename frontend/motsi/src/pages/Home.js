import React from 'react';
import '../pages/styles/Home.css';
import Banner from '../components/Banner'
import Header from '../components/Header'
import Grid from '../components/Grid'

// ES7 snippets to do 'rfce'

function Home() {
        return (
                <div className='home'>
                        <Header />
                        <Banner />

                        <div className='home__section'>
                                <Grid/>
                        </div>
                </div>
        )
}

export default Home