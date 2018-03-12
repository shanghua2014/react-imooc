import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Button from 'antd';
import PCIndex from './components/pc_index';
import MobielIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';
import PCNewsDetails from "./components/pc_news_details";

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <HashRouter>
                        <Switch>
                            <Route exact path="/" component={PCIndex}/>
                            <Route path="/details/:uniquekey" component={PCNewsDetails}/>
                        </Switch>
                    </HashRouter>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobielIndex />
                </MediaQuery>
            </div>
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('mainContainer'));