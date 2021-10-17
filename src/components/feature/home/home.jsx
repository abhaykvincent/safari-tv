import React from 'react'
import './home.scss'

import FeaturedProgramWithCover from '../../featured/featuredProgramWithCover';
function Home() {
    return (
        <div className="home">
            
            <div className="splash">
                <div className="meta">
                    <div className="title">
                        <h1>SAFARI  TV</h1>
                    </div>
                    <div className="now-showing">Now Showing</div>
                </div>
                <div className="legacy">
                <div className="player"></div>
            </div>
            </div>
            <div className="featured-programs">
                <FeaturedProgramWithCover/>
                <FeaturedProgramWithCover/>
                <FeaturedProgramWithCover/>
                <FeaturedProgramWithCover/>
                <FeaturedProgramWithCover/>
                <FeaturedProgramWithCover/>
                <h1>സഫാരി കാണൂ ലൈവായി www.safaritvchannel.comലൂടെയും ആൻഡ്രോയ്ഡ് ഐഫോൺ ആപ്പിലൂടെ </h1>
            </div>


            
        </div>

        
    )
}

export default Home


