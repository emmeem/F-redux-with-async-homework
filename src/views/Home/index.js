import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadingImg from '../../assets/loading.jpg';
import loginFailed from '../../assets/loginFailed.jpg';

class Home extends Component {
  render() {
    return this.props.userInfo.isFetching ? (
      <h1>Loading...</h1>
    ) : (
      <div className="main-view home">
        <h2>Practice</h2>
        <p>基于Redux-Data-Flow课程作业，对项目进行Reudx异步数据流改造，以满足以下要求：</p>
        <ol>
          <li>
            请使用<code>redux-thunk</code>, <code>redux-promise</code> 或其他Redux异步数据流处理库对
            <strong>登录</strong>过程进行改造。
          </li>
          <li>
            对于登录过程，需要新增两种状态，并实现成如下效果：
            <ul>
              <li>状态-登录中：</li>
              <img src={loadingImg} alt="登录中" />
              <li>状态-登录失败：</li>
              <img src={loginFailed} alt="登录失败" />
            </ul>
          </li>
          <li>
            登录失败，点击<strong>登录</strong>可重新登录，点击<strong>取消</strong>回到
            <strong>初始</strong>未登录状态。
          </li>
        </ol>
      </div>
    );
  }
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

export default connect(mapStateToProps)(Home);
