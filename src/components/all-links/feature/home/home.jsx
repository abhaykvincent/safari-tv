import React from 'react'
import './home.scss'
function Home() {
    return (
        <div className="home">
            <div className="splash">
                <div className="meta">
                    <div className="title">
                        <h1>SAFARI  TV</h1>
                    </div>
                    <div className="next-program">Next</div>
                </div>
                <div className="legacy">
                <div className="player"></div>
            </div>
            </div>
            <div className="featured-programs">
                <div className="featured-program">
                    <div className="program-cover"></div>
                    <div className="program-episodes">
                        <div className="program-episode"></div>
                        <div className="program-episode"></div>
                        <div className="program-episode"></div>
                        <div className="program-episode"></div>
                        <div className="program-episode"></div>
                    </div>
                </div>
                <div className="featured-program"></div>
                <div className="featured-program"></div>
                
            </div>
            
        </div>
    )
}

export default Home
