import React, { useEffect, useState } from 'react'
import './featuredProgramWithCover.scss'
import programs from '../../data/programs';

function FeaturedProgramWithCover(props) {
    const [currentProgram, setCurrentProgram] = useState({})

    useEffect(() => {
        let selectedProgram=programs.filter(program => program.programId ===  props.program )
        if(selectedProgram){
            setCurrentProgram(selectedProgram[0])
        } 
    }, [props])
    
      

    return (
        <div className="featured-program no-scrollbar">
                    <div className="program-episodes">

                        <div className="program-episode">
                            <div className="program-cover" style={{backgroundImage: `url(${currentProgram?currentProgram.programCover:''})`}}></div>
                            <div className="program-meta"></div>
                        </div>
                        <div className="program-episode">
                            <div className="episode-number">EPSD 25</div>
                            <div className="program-cover"></div>
                            <div className="program-meta">
                                <div className="episode-name">Psyco</div>
                                <div className="episode-premier">Comming soon </div>
                            </div>
                        </div>
                        <div className="program-episode">

                            <div className="episode-number">EPSD 24</div>
                            <div className="program-cover"></div>
                            <div className="program-meta">
                                <div className="episode-name">Singing in  the Rain</div>
                                <div className="episode-premier">1d </div>
                            </div>
                        </div>
                        <div className="program-episode">

                            <div className="episode-number">EPSD 23</div>
                            <div className="program-cover"></div>
                            <div className="program-meta">
                                <div className="episode-name">Wild Strawberries</div>
                                <div className="episode-premier">2d </div>
                            </div>
                        </div>
                        <div className="program-episode">

                            <div className="episode-number">EPSD 22</div>
                            <div className="program-cover"></div>
                            <div className="program-meta">
                                <div className="episode-name">Where is the friend's Home?</div>
                                <div className="episode-premier">3d </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="featured-program-meta">{currentProgram?currentProgram.programName:''}</div>
                </div>
                
    )
}

export default FeaturedProgramWithCover
