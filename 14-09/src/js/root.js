import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import Button from 'antd';
import PCIndex from './components/pc_index';
import MobielIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';


export default class Root extends React.Component{
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <PCIndex />
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobielIndex />
                </MediaQuery>
            </div>
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('mainContainer'));