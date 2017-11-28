import React from 'react';
import { Row, Col, Menu, Icon, Tabs, message, Form, Modal, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component{
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

    setModalVisible (value) {
        console.log(value);
        this.setState({modalVisible:value})
    }
    handleClick (e) {
        if (e.key == 'register') {
            this.setState({current:'register'});
            this.setState({modalVisible:true});
        } else {
            this.setState({current:e.key});
        }
    }
    handleSubmit (e) {
        e.preventDefault();
        console.log('提交表单')
        var myFetch = {
            method:'post'
        }
        var formData = '';
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                formData = values;
            }
        });
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetch)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({ userNickName: json.NickUserName, userid: json.UserId });
        });
        message.success('请求成功！');
        this.setModalVisible(false);

    }
 

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userShow = this.state.hasLogined
        ?
            <Menu.Item key="logout" class="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>&nbsp;&nbsp;
                <Link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>&nbsp;&nbsp;
                <Button type="ghost" htmlType="button">退出</Button>
            </Menu.Item>
        :
            <Menu.Item key="register">
                <Icon type="appstore" />注册/登录
            </Menu.Item>

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="img/logo.png" alt="lolo"/>
                            <span>React News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title="用户中心" wrapClassName="vertical-center-modal" 
                            visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)}
                            cancelText="返回吧"
                            okText="关闭吧">
                            <Tabs type="card">
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
                                                    (<Input placeholder="请输入密码" />)
                                            }
                                        </FormItem>
                                    <FormItem label="确认密码">
                                            {
                                                getFieldDecorator('r_confirmPassword')
                                                    (<Input placeholder="请确认密码" />)
                                            }
                                    </FormItem>
                                    <Button type="primary" htmlType="submit" >注册</Button>
                                </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
};

export default PCHeader = Form.create()(PCHeader);
