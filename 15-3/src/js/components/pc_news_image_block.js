import React from "react";
import { Card } from "antd";
import { BrowserRouter, Link } from 'react-router-dom';

export default class PCNewsImageBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ news: json })
                console.log(json);
            });
    }

    render() {
        const styleImage = {
            display:'block',
            width:this.props.imageWidth,
            height:'90px'
        }
        const styleH3 = {
            width:this.props.imageWidth,
            whiteSpace:'nowrap',
            overflow:'hidden',
            textOverflow:'ellipsis'
        }
        const { news } = this.state;
        const newsList = news.length
            ?
            news.map((newsItem, index) => (
                <div key={index} className="imageblock">
                    <BrowserRouter>
                        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                            <div className="custom-image">
                                <img style={styleImage} src={newsItem.thumbnail_pic_s}/>
                            </div>
                            <div className="cust-card">
                                <h3 style={styleH3}>{newsItem.title}</h3>
                                <p>{newsItem.author_name}</p>
                            </div>
                        </Link>
                    </BrowserRouter>
                </div>
            ))
            :
            '数据加载中，请稍等';

        return (
            <div className="topNewsList">
                <Card title={this.props.cardTitle} bordered={true} style={{width: this.props.width}}>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}