import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Mwrappers.styl'

 class Mwrappers extends Component {
  render() {
    let {navList} = this.props
    console.log(this.props)
    // let getNewList = navList.sp
    return (
      <div className="m-wrappers">
        <div className="m-lookList">
          <div className="m-lookColumn">
            <div className="m-lookBlock">
              <div className="m-innerWrapper">
                <div className="m-lookImageWrapper">
                  <img src="" alt=""/>
                </div>
                <div className="m-lookDesc"></div>
                <div className="u-placeHolder"></div>
                <div className="m-lookDetail">
                  <div className="m-userInfo"></div>
                  <div className="m-upArea">asdasd</div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-lookColumn"></div>
        </div>
      </div>
    )
  }
}

 export default connect(state => ({navList: state.autoRecommendData}))(Mwrappers)