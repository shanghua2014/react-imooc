import React from 'react';
import BodyChildComponent from "./bodyChild";

export default class BodyComponent extends React.Component {
    constructor () {
        super();
        this.state = {username:'shanghua', age:10}
    }
    
    chageUserInfo (age) {
        this.setState({ age: age})
    }

    handleChildValueChange ( event ) {
        this.setState({age:event.target.value});
    }

    render() {
        // setTimeout(()=> {
        //     console.log(1111)
        //     this.setState({username:'IMOOC',age:30});
        // }, 4000);

        return (
            <div>
                <h2>这里是主题内容区域</h2>
                <p>姓名：{this.state.username}，年龄：{this.state.age}</p>
                <input type="button" value="提交" onClick={this.chageUserInfo.bind(this, 99)} />
                <BodyChildComponent handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}