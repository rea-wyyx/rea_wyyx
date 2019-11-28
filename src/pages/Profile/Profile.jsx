import React, { Component } from 'react'

import HeaderNav from '../../components/HeaderNav/HeaderNav'

import './Profile.styl'


export default class Profile extends Component {
	render () {
		// console.log(this)
		return (
			<div className="profile-container">
				<HeaderNav/>
				<div className="cont">
					<div className="logoWarp">
						<img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt=""/>
					</div>
					<div className="btnWarp">
						<div className="w-button">
							<span className="icon"></span>
							<span>手机号快捷登录</span>
						</div>
						<div className="w-button">
							<span className="icon"></span>
							<span>邮箱账号登录</span>

						</div>
					</div>
				</div>
				<div className="thirdWrap">
					<div className="itemWrap">
						<span className="icon"></span>
						<span>微信</span>
					</div>
					<div className="itemWrap">
						<span className="icon"></span>
						<span>QQ</span>
					</div>
					<div className="itemWrap">
						<span className="icon"></span>
						<span>微博</span>
					</div>
				</div>
			</div>
		)
	}
}
