import React, { Component } from 'react'


import Pscheader from './components/Pscheader/Pscheader.jsx'
import SwiperTab from './components/SwiperTab/SwiperTab'
import Mwrappers from './components/Mwrappers/Mwrappers'
import './Profile.styl'
export default class Profile extends Component {
	
	componentDidMount () {
		this.props.getWorthBuying()
		this.props.getAutoRecommend()
	}
	
	
	render () {
		// console.log(this)
		return (
			<div className="m-main-container">
        <Pscheader push={this.props}/>
				<SwiperTab/>
				<Mwrappers/>
      </div>
		)
	}
}
