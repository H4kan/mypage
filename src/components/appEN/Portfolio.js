import React, { Component } from 'react';
import '../../styles/Portfolio.css';

const projectDescs = [
    {
        name: 'third',
        title: 'Logical challenge Enigma',
        desc: 'Enigma is both a simple logical game and great mind challenge, will you be able to pass it?',

    },
    {
        name: 'second',
        title: 'Test shop',
        desc: 'Example of shop site created myself',
    },
    {
        name: 'first',
        title: 'Project with API',
        desc: 'Some project with API...'
    }


]


class Portfolio extends Component {
    state = {
        firstClass: 'first',
        secondClass: 'second',
        thirdClass: 'third',
    }

    previousClick = () => {
        const { firstClass, secondClass, thirdClass } = this.state;
        this.setState({
            firstClass: secondClass,
            secondClass: thirdClass,
            thirdClass: firstClass,
        });
    }

    nextClick = () => {
        const { firstClass, secondClass, thirdClass } = this.state;
        this.setState({
            firstClass: thirdClass,
            secondClass: firstClass,
            thirdClass: secondClass,
        });
    }
    render() {
        let project = {};
        projectDescs.forEach(element => { if (element.name === this.state.secondClass) project = element });
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 4 / 3 * window.innerHeight) {
                document.querySelector('div.portfolio h1 span').classList.add('activeTitle');
                document.querySelector('div.portfolio>div').classList.add('activeTitle');
            }
        });

        return (
            <div className="portfolio">
                <h1><span>My projects</span></h1>
                <div className="slider">

                    <div className="projects">
                        <button onClick={this.nextClick}>{"<"}</button>
                        <a className={this.state.firstClass}
                            href='https://h4kan.github.io/Enigma/'
                        >{''}</a>
                        <a className={this.state.secondClass}
                            href='https://h4kan.github.io/Enigma/'>{''}</a>
                        <a className={this.state.thirdClass}
                            href='https://h4kan.github.io/Enigma/'>{''}</a>
                        <button onClick={this.previousClick}>{">"}</button>
                    </div>
                    <div className="info">
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Portfolio;