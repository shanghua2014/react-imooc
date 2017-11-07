import React from 'react';
import BodyChildComponent from "./bodyChild";
import PropTypes from 'prop-types';



const defaultProps = {
    username: '默认用户名'
}
export default class BodyComponent extends React.Component {

    constructor () {
        super();
        this.state = { username: '赵尚华', age: 10, userphone:110}
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
                <p>接收到的父页面的属性：username : {this.props.username},userphone:{this.props.userphone}</p>
                <p>姓名：{this.state.username}，年龄：{this.state.age}</p>
                <input type="button" value="提交" onClick={this.chageUserInfo.bind(this, 99)} />
                <BodyChildComponent {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}

BodyComponent.PropTypes = {
    username: PropTypes.number.isRequired,
}
BodyComponent.defaultProps = defaultProps.username;