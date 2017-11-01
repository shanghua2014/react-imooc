import React from 'react';

export default class FooterComponent extends React.Component {
    componentWillMount () {
        console.log('--->Footer页面开始加载。。。');
    }
    componentDidMount () {
        console.log('--->Footer页面加载完成！');
    }

    render() {
        return (
            <footer>
                <h4>这里是脚部</h4>
            </footer>
        )
    }
}