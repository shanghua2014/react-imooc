import React from 'react';

export default class BodyComponent extends React.Component {
    constructor () {
        super();
        this.state = {username:'shanghua', age:10}
    }
    
    render() {
        setTimeout(()=> {
            console.log(1111)
            this.setState({username:'IMOOC',age:30});
        }, 4000);

        return (
            <div>
                <h2>这里是主题内容区域</h2>
                <p>state属性：{this.state.username}</p>
            </div>
        )
    }
}