import React from 'react';

import '../../styles/Skill.css'
const Skill = (props) => {

    return (
        <div className="skillOuterBox">
            <div className="skill" onClick={(e) => {
                document.querySelectorAll('.isActive').forEach(element => {
                    if (element !== e.target.parentElement && element !== e.target.parentElement.parentElement && element !== e.target.parentElement.parentElement.parentElement)
                        element.classList.remove('isActive');

                });
                e.target.parentElement.classList.toggle('isActive');
                e.target.parentElement.parentElement.classList.toggle('isActive');
                e.target.parentElement.parentElement.parentElement.classList.toggle('isActive');
            }}>
                <div className="skillBox" style={{
                    backgroundColor: props.color,
                }}>
                    <div className="wrappo"></div>
                    <div className="skillFront" >
                        <p>{props.title}</p>
                    </div>
                    <div className="skillBack">
                        <div className="wrappo2"></div>
                        <div className="back">
                            <p>{props.desc}</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Skill;
