import React, { Component } from 'react'
import './index.styl'

export default class RecommendFollow extends Component {
  render() {
    return (
      <div className="recommendContainer">
         <span className="title">推荐关注</span>
         <div className="itemWrap">
            <img src="https://yanxuan-item.nosdn.127.net/b557faf1edce828e3605bff2fc3f575a.png" alt=""/>
            <div className="item-right">
              <p>加厚加绒内里 保暖舒适</p>
              <span>奥莱特惠</span>
              <h4>毛毛虫儿童加绒运动靴26-35码</h4>
              <span>￥199</span>
            </div>
         </div> 
         <div className="goods">
           <ul>
             <li>
               <div>
                 <img src="https://yanxuan-item.nosdn.127.net/16ba6260bc2b9d29b7093399fb280e06.png" alt=""/>
                 <span>古法传承 艾灸养生</span>
                 <span>便携智能艾灸盒</span>
                 <span>￥399</span>
               </div>
             </li>
             <li>
               <div>
                 <img src="https://yanxuan-item.nosdn.127.net/16ba6260bc2b9d29b7093399fb280e06.png" alt=""/>
                 <span>古法传承 艾灸养生</span>
                 <span>便携智能艾灸盒</span>
                 <span>￥399</span>
               </div>
             </li>

           </ul>
         </div>
      </div>
    )
  }
}
