const React = require('react');
const ReactDOM = require('react-dom');
import HeaderComponent from './components/header';

class Index extends React.Component {
    render() {
        return (
            < div > 
            < HeaderComponent / > 
            这里是主题
            < /div>
        )
    }
}

ReactDOM.render( <Index / >, document.getElementById('box'));