/**
 * 8-1 state属性：对于模块来说它是自身属性
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
                <BodyComponent/>
                <FooterComponent/>
            < /div>
        )
    }
}

ReactDOM.render( <Index / >, document.getElementById('box'));