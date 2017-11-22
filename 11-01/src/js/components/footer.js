import React from 'react';
var footerCss = require("../../css/footer.css");

export default class FooterComponent extends React.Component {
    componentWillMount () {
        console.log('--->Footer页面开始加载。。。');
    }
    componentDidMount () {
        console.log('--->Footer页面加载完成！');
    }

    render() {
        return (
            <footer class={footerCss.footer}>
                <h4>这里是脚部</h4>
            </footer>
        )
    }
}