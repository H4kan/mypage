import React, { Component } from 'react';
import '../../styles/Footer.css'

class Footer extends Component {
    state = {
        isLinksActive: '',
    }
    showLinks = () => {
        if (this.state.isLinksActive === '')
            this.setState({
                isLinksActive: 'visible',
            })
        else
            this.setState({
                isLinksActive: '',
            })
    }
    render() {
        return (
            <footer>
                <button onClick={this.showLinks}>Icons by Icons8</button>
                <a
                    className={this.state.isLinksActive}
                    href="https://icons8.com/icon/73876/below"  >Arrow</a>
                <a className={this.state.isLinksActive} href="https://icons8.com/icon/8818/facebook-filled">Facebook</a>
                <a className={this.state.isLinksActive} href="https://icons8.com/icon/8824/twitter-filled">Twitter</a>
                <a className={this.state.isLinksActive} href="https://icons8.com/icon/8808/linkedin-filled">LinkedIn</a>
                <a className={this.state.isLinksActive} href="https://icons8.com/icon/12599/github-filled">Github</a>
                <a className={this.state.isLinksActive} href="https://icons8.com/icon/9730/phone-filled">Phone</a>
                <a className={this.state.isLinksActive} href="https://icons8.com/icon/2848/email-envelope">Email</a>
                <span>Author: Szymon Sieradzki 2019</span>
            </footer>
        );
    }
}

export default Footer;
