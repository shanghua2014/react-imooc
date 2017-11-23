import React from 'react';
import ReactDOM from 'react-dom';

export default class MobileHeader extends React.Component {
    render() {
        return (
            <div id="mobileheader">
                <header>
                    <img src="img/logo.png" />
                    <span>React News</span>
                </header>
            </div>
        )
    }
}