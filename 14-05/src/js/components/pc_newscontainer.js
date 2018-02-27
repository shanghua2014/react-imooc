import React from "react";
import { Row, Col } from "antd";
import { Tabs, Carousel } from "antd";
import  PCNewsBlock  from "./pc_news_block";

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./img/2046.jpg" /></div>
                                    <div><img src="./img/2046.jpg" /></div>
                                    <div><img src="./img/2046.jpg" /></div>
                                    <div><img src="./img/2046.jpg" /></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock type="top" count={10} width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock type="guoji" count={10} width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}