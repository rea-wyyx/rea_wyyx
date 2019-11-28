import React, { Component } from "react"
import BScroll from 'better-scroll'
import Pscheader from './components/Pscheader/Pscheader.jsx'
import SwiperTab from './components/SwiperTab/SwiperTab.jsx'
import Mwrappers from './components/Mwrappers/Mwrappers.jsx'
import './Recommend.styl'
export default class Recommend extends Component {
	componentDidMount () {
		this.props.getWorthBuying()
		this.props.getAutoRecommend()
		new BScroll ('.main',{
			click: true,
			scrollY:true
		})
	}
	
	render () {
		return (
			<div className="m-main-container">
        <Pscheader push={this.props}/>
				<div className="main">
					<div className="cont">
						<SwiperTab/>
						<Mwrappers/>
					</div>
				</div>
      </div>
		)
	}
}
