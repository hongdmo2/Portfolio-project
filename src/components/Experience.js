import React from 'react'

function Experience() {
    return (
        <div className ="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker">     </div>     
                    <div className="timeline-content">
                        <h3>DEC 2014 - AUG 2017 </h3>
                        <h3 className="JOB"> Power Generator Mechanic / Building Custodian US Army Humphrey</h3>
                        <p>
                        <li>Supervised and operated troubleshooting and diagnostics ofmechanical equipment as a team leader with effectivecommunication and presentation skills, able to coordinate withmanagement, and team members to achieve goals.</li>
                        <li>Superior problem-solving and time-management abilities; adeptat identifying the root cause of issues and implementing creative,targeted solutions. Juggled multiple projects and tasks to ensurehigh quality and timely delivery.</li>
                        <li>Worked as a sole custodian in 50+ soldiers in the motor pool andwas responsible for the serviceability, accountability, andreadiness of all assigned support equipment valued in excess of$750K.</li>
                        </p>
                    </div>
                </div>
                {/* */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker">     </div>     
                    <div className="timeline-content">
                        <h3>2018-2010</h3>
                        <h3 className="JOB">POWER</h3>
                        <p>ARMY SERVICES</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
