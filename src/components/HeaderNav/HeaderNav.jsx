import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import  './HeaderNav.styl'

 class HeaderNav extends Component {
  handletoHome = ()=> {
    this.props.history.push('/home')
    console.log(this.props)
  }
  handletoShop = () =>{
    this.props.history.push('/shopcart')
  } 
  handletopSearch = () => {
    this.props.history.push('/search')
  }

  render() {
    return (
      <div className="headernav-container">
        <div className="header"> 
          <span className="icon" onClick={this.handletoHome}></span>
          <span>网易严选</span>
          <div className="right">
            <span className="icon" onClick={this.handletopSearch}></span>
            <span className="icon" onClick={this.handletoShop}></span>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(HeaderNav)
