import React from 'react'
import './home.scss'

import FeaturedProgramWithCover from '../../featured/featuredProgramWithCover';
import episodes from '../../../data/episodes';
import FeaturedPrograms from '../../featured/featuredPrograms';
function Home() {
    const programsHTML= episodes.map(program=>{
        return <FeaturedProgramWithCover program={program.programId}/>
    })
    console.log(programsHTML)
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
            <FeaturedPrograms/>


            
        </div>

        
    )
}

export default Home


