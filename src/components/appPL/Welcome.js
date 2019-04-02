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
            <h1>Witaj na <span>m</span>oj<span>e</span>j str<span>o</span>nie!</h1>
            <div className="about">
                <div className="wrappy">
                    <div className="profile"></div>
                    <p>Nazywam się  <b>Szymon Sieradzki</b>. Tworzę strony internetowe od lipca 2018r. Szczególnie lubię korzystać z&nbsp;biblioteki <b>React</b> oraz <b>Flexboxa</b>.</p>
                </div>
            </div>
            <SkillList />


        </section>
    );
}

export default Welcome;