import React from 'react';

export default class HeaderComponent extends React.Component {
    componentWillMount () {
        console.log('--->Header页面开始加载。。。');
    }
    componentDidMount () {
        console.log('--->Header页面加载完成！');
    }
    render() {
        return (
            <header>
                <h1>这里一个头部!!!</h1>
            </header>
        )
    }
}