import React from 'react'
import episodes from '../../data/episodes';
import FeaturedProgramWithCover from './featuredProgramWithCover';

function FeaturedPrograms() {
    const programsHTML= episodes.map(program=>{
        return <FeaturedProgramWithCover program={program.programId}/>
    })
    return (
            <div className="featured-programs">
                {programsHTML}
                <h1>സഫാരി കാണൂ ലൈവായി www.safaritvchannel.comലൂടെയും ആൻഡ്രോയ്ഡ് ഐഫോൺ ആപ്പിലൂടെ </h1>
            </div>
    )
}

export default FeaturedPrograms
