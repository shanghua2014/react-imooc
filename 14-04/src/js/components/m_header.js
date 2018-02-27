import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Row, Col, Menu, Icon, Tabs, message, Form, Modal, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            current : 'top',
            modalVisible:false,
            active:'login',
            hasLogined : false,
            userNickName:'',
            userid:0
        }
    }

    componentWillMount() {
        if (localStorage.username) {
            this.setState({
                hasLogined: true,
                userNickName: localStorage.username,
                userid: localStorage.userid
            })
        }
    }

    setModalVisible(value) {
        console.log(value);
        this.setState({ modalVisible: value })
    }
    handleClick(e) {
        if (e.key == 'register') {
            this.setState({ current: 'register' });
            this.setState({ modalVisible: true });
        } else {
            this.setState({ current: e.key });
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('提交表单')
        var myFetch = {
            method: 'post'
        }
        var formData = '';
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                formData = values;
            }
        });
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.active + "&username=" + formData.userName + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetch)
            .then(response => response.json())
            .then(json => {
                this.setState({ userNickName: json.NickUserName, userid: json.UserId });
                localStorage.username = json.NickUserName;
                localStorage.userid = json.UserId;
            });
        if (this.state.active == 'login') {
            this.setState({ hasLogined: true });
        }
        this.setModalVisible(false);
    }
    callback(key) {
        if (key == 1) {
            this.setState({ active: 'login' });
        } else if (key == 2) {
            this.setState({ active: 'register' });
        }
    }
    login() {
        this.setModalVisible(true);
    }
    loginout() {
        this.setState({ hasLogined: false });
        localStorage.clear();
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userShow = this.state.hasLogined
        ?
            <BrowserRouter>
                    <Link to="/">
                        <Icon type="inbox" />
                    </Link>
            </BrowserRouter>
        :
            <Icon type="setting" onClick={this.login.bind(this)} />

        return (
            <div id="mobileheader">
                <header>
                    <img src="img/logo.png" />
                    <span>React News</span>
                    {userShow}
                    <Modal title="用户中心" wrapClassName="vertical-center-modal"
                        visible={this.state.modalVisible}
                        onCancel={() => this.setModalVisible(false)}
                        onOk={() => this.setModalVisible(false)}
                        cancelText="返回吧"
                        okText="关闭吧">
                        <Tabs type="card" onChange={this.callback.bind(this)}>
                            <TabPane tab="登录" key="1">
                                <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                    <FormItem label="账户">
                                        {
                                            getFieldDecorator('userName')
                                                (<Input placeholder="请输入用户名" />)
                                        }
                                    </FormItem>
                                    <FormItem label="密码">
                                        {
                                            getFieldDecorator('password')
                                                (<Input type="password" placeholder="请输入密码" />)
                                        }
                                    </FormItem>
                                    <Button type="primary" htmlType="submit" >登录</Button>
                                </Form>
                            </TabPane>
                            <TabPane tab="注册" key="2">
                                <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                    <FormItem label="账户">
                                        {
                                            getFieldDecorator('r_userName')
                                                (<Input placeholder="请输入用户名" />)
                                        }
                                    </FormItem>
                                    <FormItem label="密码">
                                        {
                                            getFieldDecorator('r_password')
                                                (<Input type="password" placeholder="请输入密码" />)
                                        }
                                    </FormItem>
                                    <FormItem label="确认密码">
                                        {
                                            getFieldDecorator('r_confirmPassword')
                                                (<Input type="password" placeholder="请确认密码" />)
                                        }
                                    </FormItem>
                                    <Button type="primary" htmlType="submit" >注册</Button>
                                </Form>
                            </TabPane>
                        </Tabs>
                    </Modal>
                </header>
            </div>
        )
    }
}
export default MobileHeader = Form.create()(MobileHeader);