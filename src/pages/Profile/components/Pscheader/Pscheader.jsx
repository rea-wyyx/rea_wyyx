import React, { Component } from "react"
import './Pscheader.styl'
export default class Pscheader extends Component {
  render() {
    let { push } = this.props
    return(
      <div className="headerWrap">
         <div className="psc-row">
            <span className="psc-m-hamburger iconfont iconhome" onClick={() => { push.history.push('/home') }} ></span>
            <div className="m-toptab">值得买</div>
            <div className="psc-m-right">
              <span className="psc-u-nav-link iconfont iconfangdajing" onClick={() => {push.history.push('/search')}}></span>
              <span className="psc-u-nav-link iconfont icongouwuche-01" onClick={() => {push.history.push('/shopcart')}}></span>
            </div>
         </div>
      </div>
    )
  }
}