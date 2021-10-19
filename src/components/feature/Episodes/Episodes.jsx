import React from 'react'
import FeaturedProgramWithCover from '../../featured/featuredProgramWithCover';
import episodes from '../../../data/episodes';
import FeaturedPrograms from '../../featured/featuredPrograms';

function Episodes() {
    const programsHTML= episodes.map(program=>{
        return <FeaturedProgramWithCover program={program.programId}/>
    })
    return (
        <div className="episodes">
            
            
            <FeaturedPrograms/>
        </div>
    )
}

export default Episodes
