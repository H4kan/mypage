import React from 'react';

import Skill from './Skill';



import '../../styles/SkillList.css';
const data = [
    {
        title: "HTML",
        id: 1,
        color: "red",
        desc: "W moich projektach korzystam z najnowszego standardu HTML5 oraz korzyści płynącej z jego semantyczności.",
    },
    {
        title: "CSS",
        id: 2,
        color: "blue",
        desc: "Potrafię używać trendowych rozwiązań arkuszy stylów takich jak Flexbox, media queries, pseudoelementy i pseudoklasy.",
    },
    {
        title: "JS",
        id: 3,
        color: "yellowgreen",
        desc: "Dzięki Javascript mogę tworzyć strony dynamiczne, dodatkowo w mojej składni korzystam z dobrodziejstw ES5 i ES6 takich jak np. destrukturyzacja, Arrow function, czy let i const.",
    },
    {
        title: "React",
        id: 4,
        color: "violet",
        desc: "Znajomość React strukturyzuje moją pracę z JS'em, a React Router pozwala na realizowanie konwencji SPA. ",
    },
    {
        title: "Responsywność",
        id: 5,
        color: "brown",
        desc: "Moje strony są responsywne, dzięki czemu można z nich komfortowo korzystać na dowolnym urządzeniu.",
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

            <h3>Moje umiejętności:</h3>
            {data.map(({ title, icon, color, desc, id }) => <Skill title={title} icon={icon} color={color} desc={desc} key={id} />)}
        </div>
    );
}

export default SkillList;