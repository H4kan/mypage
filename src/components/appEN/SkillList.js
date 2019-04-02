import React from 'react';

import Skill from './Skill';



import '../../styles/SkillList.css';
const data = [
    {
        title: "HTML",
        id: 1,
        color: "red",
        desc: "In my projects I use the newest standard HTML5 and benefits which are achieved from its semanticity.",
    },
    {
        title: "CSS",
        id: 2,
        color: "blue",
        desc: 'I can use trendy stylesheets solutions i.e. Flexbox, media queries, pseudoelements and pseudoclasses.',
    },
    {
        title: "JS",
        id: 3,
        color: "yellowgreen",
        desc: 'Thanks to Javascript, i can create dynamic websites, addictively in my syntax I use goods of ES5 and ES6 i.e. destructurization, Arrow function, or let and const.',
    },
    {
        title: "React",
        id: 4,
        color: "violet",
        desc: 'Knowledge about React structurize my work with JS, and React Router allows me to realize the SPA convention.',
    },
    {
        title: "Responsiveness",
        id: 5,
        color: "brown",
        desc: 'My sites are responsive, which means they can be comfortably used on every device.',
    },
    {
        title: "Backend",
        id: 6,
        color: "green",
        desc: "TBD",
    }
];


const SkillList = () => {

    return (
        <div className="skills">

            <h3>My skills:</h3>
            {data.map(({ title, icon, color, desc, id }) => <Skill title={title} icon={icon} color={color} desc={desc} key={id} />)}
        </div>
    );
}

export default SkillList;