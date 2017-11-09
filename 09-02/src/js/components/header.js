import React from 'react';

export default class HeaderComponent extends React.Component {
    componentWillMount () {
        console.log('--->Header页面开始加载。。。');
    }
    componentDidMount () {
        console.log('--->Header页面加载完成！');
    }

    constructor() {
        super();
        this.state = {
            miniHeader :false
        }
    }

    switchStyle () {
        this.setState({
            miniHeader:!this.state.miniHeader
        })
    }
    
    render() {
        const styleComponentStyle = {
            header: {
                backgroundColor:'#ccc',
                color:'#fff',
                paddingTop : (this.state.miniHeader) ? '0' : '15px',
                paddingBottom: (this.state.miniHeader) ? '0' : '15px'
            }
        }

        return (
            <header style={styleComponentStyle.header} className="header" onClick = {this.switchStyle.bind(this)}>
                <h1>这里一个头部!!!</h1>
            </header>
        )
    }
}