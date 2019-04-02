import React from 'react';
import '../../styles/Welcome.css';
import SkillList from './SkillList';

const Welcome = () => {

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 2 / 3 * window.innerHeight) {
            document.querySelector('div.about').classList.add('slidingClass');
            document.querySelector('div.skills').classList.add('acitveFromRight');
        }
    })
    return (
        <section className="welcome">
            <h1>Welcome to <span>m</span>y <span>p</span>ag<span>e</span>!</h1>
            <div className="about">
                <div className="wrappy">
                    <div className="profile"></div>
                    <p>My name is  <b>Szymon Sieradzki</b>. I've been creating webpages since July 2018. I like especially using library <b>React</b> and <b>Flexbox</b>.</p>
                </div>
            </div>
            <SkillList />


        </section>
    );
}

export default Welcome;