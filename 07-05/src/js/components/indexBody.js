import React from 'react';

export default class BodyComponent extends React.Component {
    componentWillMount () {
        console.log('--->Body页面开始加载。。。');
    }
    componentDidMount () {
        console.log('--->Body页面加载完成！');
    }

    render() {
        var userName = 'shanghua';
        var isHide = true;
        var html = 'IMOOC&nbsp;&yen;&nbsp;LESSON';

        return (
            <div>
                <h2>这里是主题内容区域</h2>
                <p>{userName=='' ? '用户未登录' : userName}</p>
                < input type = "button" value = {userName} disabled = {isHide} />
                {/*注释*/}
                <p>{html}</p> {/* 需要 unicode 转码 */}
                <p dangerouslySetInnerHTML = {{__html:html}} ></p>
            </div>
                // 注释注释
        )
    }
}