import React from 'react';
import ReactDOM from 'react-dom';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane;
import MobileList from "./mobile_list";

export default class MobileIndex extends React.Component {

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
                <MobileHeader />
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <Carousel {...settings}>
                            <div><img src="./img/2046.jpg" /></div>
                            <div><img src="./img/2046.jpg" /></div>
                            <div><img src="./img/2046.jpg" /></div>
                            <div><img src="./img/2046.jpg" /></div>
                        </Carousel>
                        <MobileList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList count={20} type="shehui" />
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList count={20} type="guonei" />
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList count={20} type="guoji" />
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList count={20} type="yule" />
                    </TabPane>
                </Tabs>
                <MobileFooter />
            </div>
        )
    }
}