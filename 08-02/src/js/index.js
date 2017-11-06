/**
 * 8-2 props 属性：对于模块来说 属于 外来属性，组件之间互相传值
 */
const React = require('react');
const ReactDOM = require('react-dom');
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import BodyComponent from './components/indexBody'

class Index extends React.Component {
    componentWillMount () {
        console.log('------>index页面开始加载。。。');
    }
    componentDidMount () {
        console.log('------>index页面加载完成！');
    }

    render() {
        return (
            < div > 
                < HeaderComponent / > 
                <BodyComponent username={'赵尚华'} userphone={15910277440}/>
                <FooterComponent/>
            < /div>
        )
    }
}

ReactDOM.render( <Index / >, document.getElementById('box'));