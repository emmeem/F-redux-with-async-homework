import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Menu from './layout/Menu';
import Home from './views/Home';
import { modules } from './utils';
import './App.scss';
import { fetchUserInfo } from './actions';

class App extends Component {
  cancel = () => {
    location.reload()
  }
 
  retry = () => {
    this.props.handleFetchInfo();
  }

  render() {
    if(this.props.userInfo.netError) {
      return(
        <div className="app">
          <Router>
            <Header />
            <Menu />
            <main className="main">
              <p className="fail">登录失败</p>
              <section className="btn">
                <button value="cancel" className="cancel" 
                onClick={this.cancel}>取消</button>
                <button value="retry" className="retry"
                 onClick={this.retry}>重试</button>
              </section>
            </main>
          </Router>
        </div>
      );
    }else {
      return (
        <div className="app">
          <Router>
            <Header />
            <Menu />
            <main className="main">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                {this.props.userInfo.logged &&
                  modules.map(
                    ({ path, component, permissionCode }) =>
                      this.props.userInfo.permissions.includes(permissionCode) && (
                        <Route key={path} path={path}>
                          {component}
                        </Route>
                      )
                  )}
                <Route path="*">
                  <Home />
                </Route>
              </Switch>
            </main>
          </Router>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

const mapDispatchToProps = dispatch => ({
  handleFetchInfo: () => {
    dispatch(fetchUserInfo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
