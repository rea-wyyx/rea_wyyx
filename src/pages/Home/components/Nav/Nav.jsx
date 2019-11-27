import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import './Nav.styl'
class Nav extends Component {
  toDetail=()=>{
		this.props.history.push('/home/item')
	}
	render () {
		let { navList } = this.props
		return (
			<section className="nav-container">
				<ul className="nav-box">
					{
						navList.map((item, index) => {
							return (<li className="nav-item" key={index} onClick={this.toDetail}>
								{/* <a href={item.schemeUrl}></a> */}
									<img src={item.picUrl} alt="导航列表" />
									<span>{item.text}</span>
							</li>)
						})
					}
				</ul>
			</section>
		)
		
	}
}

export default connect(state => ({ navList: state.homeNavList }))(withRouter(Nav))
