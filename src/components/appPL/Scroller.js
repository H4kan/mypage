import React from 'react';

import '../../styles/Scroller.css';


const Scroller = (props) => {
    // console.log(window.pageYOffset)

    const handleScrollerClick = () => {
        // window.scrollBy(0, window.innerHeight);
        props.scroll();
    }
    return (
        <button className="scroller" onClick={handleScrollerClick}>
            <img src="https://img.icons8.com/dotty/80/eeeeee/circled-down.png" alt='arrow-down'></img>
        </button>
    );
}

export default Scroller;