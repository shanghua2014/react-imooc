import React from "react";
import { Row, Col } from "antd";
import { Tabs, Carousel } from "antd";
import PCNewsBlock from "./pc_news_block";
import PCNewsImageBlock from "./pc_news_image_block";

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
                            <PCNewsImageBlock count={6} type="guonei" width="400px" imageWidth="112px" cardTitle="国内头条" />
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="头条" key="1">
                                <PCNewsBlock type="top" count={20} width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock type="guoji" count={20} width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}