/**
 * 10-1 Router概念
 */
const React = require('react');
const ReactDOM = require('react-dom');
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import BodyComponent from './components/indexBody';
import 'antd/dist/antd.css';


export default class Index extends React.Component {
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
                <BodyComponent username={'shanghua.zhao'} userphone={15910277440}/>
                <FooterComponent/>
            < /div>
        )
    }
}