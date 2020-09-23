import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo, clearUserInfo } from '../actions';
import './Header.scss';

class Header extends Component {
  switchLogin = () => {
    if (this.props.userInfo.logged) {
      this.props.handleSignOut();
    } else {
      this.props.handleFetchInfo();
    }
  };

  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.userInfo.logged && (
            <>
              <img src="https://avatars2.githubusercontent.com/u/40817605" alt="头像" />
              <span className="username">Kevin</span>
            </>
          )}

          <a className="sign" onClick={this.switchLogin}>
            {this.props.userInfo.logged ? 'Sign out' : 'Sign in'}
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

const url = 'https://my-json-server.typicode.com/kevindongzg/demo/login'; 

const mapDispatchToProps = dispatch => ({
  handleSignOut: () => {
    dispatch(clearUserInfo());
  },

  handleFetchInfo: () => {
    dispatch(fetchUserInfo(dispatch, url))},
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
