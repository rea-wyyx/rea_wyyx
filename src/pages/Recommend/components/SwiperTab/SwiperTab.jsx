import React, { Component } from 'react'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
import './SwiperTab.styl'
import bg from '../../images/bg.png'
import logo from '../../images/logo.png'
class SwiperTab extends Component {
  componentDidMount(){
    new BScroll('.u-swiperPage', {
      click: true,
      scrollX: true
    })
  }
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
          <div className=" u-swiperContainer">
            <div className="swiper-wrapper">
              <div className=" u-swiperPage">
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

