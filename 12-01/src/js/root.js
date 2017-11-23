import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import Button from 'antd';
import PCIndex from './components/pc_index';

export default class Root extends React.Component{
    render() {
        return (
            <div>
                <PCIndex/>
            </div>
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('mainContainer'));