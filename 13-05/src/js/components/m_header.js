import React from 'react';
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
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetch)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ userNickName: json.NickUserName, userid: json.UserId });
            });
        message.success('请求成功！');
        this.setModalVisible(false);
    }
    login() {
        this.setModalVisible(true);
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userShow = this.state.hasLogined
        ?
            <Link>
                <Icon type="inbox" />
            </Link>
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
                </header>
            </div>
        )
    }
}
export default MobileHeader = Form.create()(MobileHeader);