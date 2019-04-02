import React from 'react';
import '../../styles/Header.css';
import Scroller from './Scroller.js'
const Header = (props) => {
    window.scrollBy(0, -500);
    return (
        <>
            <div className="backdrop">
                <div className="shadow"></div>
                <header className="header">
                    <h1>Cześć, jestem Szymon!</h1>
                    <h2>Web Developer z pasją</h2>
                </header>
                <Scroller scroll={props.scroll} />
            </div>
            <nav>
                <button
                    className={'language ' + (props.language === 'pl' ? 'active' : '')}
                    onClick={() => props.setLanguage('pl')}
                >PL</button>
                <button
                    className={'language ' + (props.language === 'en' ? 'active' : '')}
                    onClick={() => props.setLanguage('en')}
                >EN</button>
            </nav>
        </>
    );
}

export default Header;