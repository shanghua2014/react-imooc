const React = require('react');
const ReactDOM = require('react-dom');
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import BodyComponent from './components/indexBody'

class Index extends React.Component {
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