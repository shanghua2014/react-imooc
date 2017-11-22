import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ListComponent from './components/list';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
export default class Root extends React.Component{
    render() {
        return (
            <Router >
                <Route path="/" component ={Index} />
                <Route path="list" component={ListComponent} />
            </Router>
        );
    }
}


ReactDOM.render(<Root />, document.getElementById('box'));