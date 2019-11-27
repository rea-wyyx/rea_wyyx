import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SwiperTab.styl'
import bg from '../../../../static/images/list/topic_title_bg.png'
import logo from '../../../../static/images/logo/logoc2284970.png'
// import qq from '../../../../static/images/icon/10be9152a4937eb17b8e3841fff8f6b1.jpg'
class SwiperTab extends Component {
  render() {
    let {navList } = this.props
    console.log(this.props)
     let getNewList = navList.splice(2,11)
    
    return (
      <div className="m-swiperTab-container">
        <div className="m-swiperTab-title">
          <img className="u-title" src={logo} alt=""/>
          <div className="u-text">严选好物&nbsp;用心生活</div>
          <img className="u-bg" src={bg} alt=""/>
        </div>
        <div className="m-swiper">
          <div className="swiper-container u-swiperContainer">
            <div className="swiper-wrapper">
              <div className="swiper-slide u-swiperPage">
                <div className="u-group">
                  {
                    getNewList.map((item,index) => {
                      return(
                        <a className="u-item" href="javascript:;" key={index}>
                          <div className="m-topContainer">
                            <img className="u-topPic" src={item.picUrl} alt=""/>
                          </div>
                          <div className="m-detail">
                          <div className="u-mainText">{item.mainTitle}</div>
                            <div className="u-descText">{item.viceTitle}</div>
                          </div>
                        </a>)
                         })
                  }
                  {/* {
                    getNewList.map((item,index) => {
                      return(
                        <a className=" u-item activ" href="javascript:;" key={index}>
                        <div className="m-topContainer">
                          <img className="u-topPic" src={item.listPicUrl} alt=""/>
                        </div>
                        <div className="m-detail">
                          <div className="u-mainText">{item.name}</div>
                          <div className="u-descText">{item.simpleDesc}</div>
                        </div>
                        </a>
                         )
                  } */}
                        

                        
                      
                   
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ navList: state.worthBuyingList}))(SwiperTab)