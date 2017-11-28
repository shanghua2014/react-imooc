import React from 'react';
import ReactDOM from 'react-dom';
import MobileHeader from './m_header';
import MobileFooter from './m_footer';

export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader />
                <MobileFooter />
            </div>
        )
    }
}