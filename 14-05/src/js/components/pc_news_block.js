import React from "react";
import { Card } from "antd";
import { Router, Route } from 'react-router-dom';


export default class PCNewsBlock extends React.Component {
    constructor () {
        super();
        this.state = {
            news : ''
        }
    }
    
    componentWillMount () {
        var myFetchOptions = {
            method :'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="
            + this.props.type + "&count="
            + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({ news: json }));
    }

    render () {
        const {news} = this.state;
        const newsList = news.length
        ?
        news.map((newsItem, index)=>(
            <li key={index}>
                {newsItem.title}
            </li>
        ))
        :
        '数据加载中，请稍等';

        return (
            <div class="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}