import React, { Component } from 'react'

import  './HeaderNav.styl'
export default class HeaderNav extends Component {
  render() {
    return (
      <div className="headernav-container">
        <div className="header"> 
          <span className="icon"></span>
          <span>网易严选</span>
          <div className="right">
            <span className="icon"></span>
            <span className="icon"></span>
          </div>
        </div>
      </div>
    )
  }
}
