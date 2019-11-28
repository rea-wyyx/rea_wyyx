import React, { Component } from 'react'
import './CategoryDetail.styl'
import Swiper1 from './Swiper/Swiper'
import RecommendFollow from './RecommendFollow'
import HeaderTitle from './Header'
import Split from '../../components/Split/Split'
export default class CategoryDetail extends Component {
  render() {
    return (
      <div className="mainContainer">
        <HeaderTitle/>
       	<Swiper1 ref="swiper" />
        <Split/>
        <RecommendFollow></RecommendFollow>
      </div>
    )
  }
}
