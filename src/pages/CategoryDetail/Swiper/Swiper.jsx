import React, { Component } from 'react'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import './Swiper.styl'
export default class Swiper1 extends Component {
	componentDidMount () {
		this._initSwiper()
	}
	_initSwiper = () => {
		/* eslint-disable no-new */
		new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			// autoplay: true, // 自动轮播
			speed: 1000,
			pagination: {
				el: '.swiper-pagination',
				bulletActiveClass: 'my-bullet-active',
				renderCustom: function (swiper, current, total) {
					let customPaginationHtml = '';
					for (let i = 0; i < total; i++) {
						// 判断哪个分页器此刻应该被激活
						if (i === current - 1) {
							customPaginationHtml +=
								'<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
						} else {
							customPaginationHtml +=
								'<span class="swiper-pagination-customs"></span>';
						}
					}
					//              return '<span class="swiperPag">' + customPaginationHtml + '</span>';
					return customPaginationHtml;
				}
			}
		});
	}
	render () {
		return (
			<div className="page">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/729ed0335c343e190621677f95e332f3.jpg" alt="实时热销top100" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/425075221774f12971cb84bff7239a78.jpg" alt="2019新品发布会" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/e5d1ddbd34e30079beadcd285dc40674.jpg" alt="福利站" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/587fe0ef0023aa856f8a560f342823a5.jpg" alt="春季四件套换新" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/525143384b55cc564b9f593d64b108a5.jpg" alt="护理好物集" />
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
}
