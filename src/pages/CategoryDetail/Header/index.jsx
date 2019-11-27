import React, { Component } from 'react'
import './header.styl'
import {withRouter} from 'react-router-dom'

 class Header extends Component {
 
  render() {
    return (
      <div className="headerContainer">
        <div className="content">
        <span className="iconfont icon-home" onClick={()=>{this.props.history.goBack()}}></span>   
        <span className="title">网易严选</span>
        <div className="right">
          <span className="iconfont icon-sousuo"></span>     
          <span className="iconfont icon-shopcart"></span>     
        </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)