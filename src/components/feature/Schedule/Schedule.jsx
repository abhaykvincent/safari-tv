import React from 'react'
import DaysPanel from './days-panel'
import './Schedule.scss'

function Schedule() {
    return (
        <div className="schedule">
             <div className="splash">
                <div className="meta">
                    <div className="title">
                        <h1>SCHEDULE</h1>
                    </div>
                </div>
            </div>
            <DaysPanel/>
            <ProgramSchedule/>
        </div>

        
    )
}
function ProgramSchedule() {
    return (
        <div className="program-schedules">
            <div className="program">
                <div className="program-cover">
                    <div className="label">
                        Now Showing
                    </div>
                </div>
                <div className="program-name">HISTORY</div>
                <div className="program-time">10:00 AM - 10:30 PM</div>
            </div>
            <div className="program">
                <div className="program-cover"></div>
                <div className="program-name">HOLLYLAND IN 2006</div>
                <div className="program-time">10:00 AM - 10:30 PM</div>
            </div>
            <div className="program">
                <div className="program-cover"></div>
                <div className="program-name">AROUND THE WORLD IN 30MINS</div>
                <div className="program-time">10:00 AM - 10:30 PM</div>
            </div>
            <div className="program">
                <div className="program-cover"></div>
                <div className="program-name">ANIMAL KINGDOM</div>
                <div className="program-time">10:00 AM - 10:30 PM</div>
            </div>
            <div className="program">
                <div className="program-cover"></div>
                <div className="program-name">AA YATRAYIL</div>
                <div className="program-time">10:00 AM - 10:30 PM</div>
            </div>
            <div className="program">
                <div className="program-cover"></div>
                <div className="program-name">CHARITHRAM CHALACHITHRAM</div>
                <div className="program-time">10:00 AM - 10:30 PM</div>
            </div>
            <div className="program">
                <div className="program-cover"></div>
                <div className="program-name">ORU SANCHARIYUDE DIARYKURIPUKAL</div>
                <div className="program-time">10:00 AM - 10:30 PM</div>
            </div>
            <div className="program">
                <div className="program-cover"></div>
                <div className="program-name">OPERAHOUSE</div>
                <div className="program-time">10:00 AM - 10:30 PM</div>
            </div>
        </div>

        
    )
}
export default Schedule


