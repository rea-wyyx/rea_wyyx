import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Mwrappers.styl'

class Mwrappers extends Component {
  render() {
    let {topics} = this.props
    console.log(this.props.topics)
    // let getNewList = topics.splic(1,2)
    return (
      <div className="m-wrappers">
        <div className="m-lookList">
          <div className="m-lookColumn">
            <div className="m-lookBlock">
              {
                topics.map((item,topicId) => {
                  return(
                    <div className="m-innerWrapper" key={topicId}>
                      <div className="m-lookImageWrapper">
                        <img src={item.picUrl} alt=""/>
                      </div>
                      <div className="m-lookDesc">{item.title}</div>
                      <div className="u-placeHolder"></div>
                      <div className="m-lookDetail">
                        <div className="m-userInfo">
                          <img src={item.avatar} alt=""/>
                          <div>{item.nickname}</div>
                        </div>
                  <div className="m-upArea">{item.readCount}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="m-lookColumn"></div>
        </div>
      </div>
    )
    
  }
 
}
  export default connect(state => ({topics: state.autoRecommendData}))(Mwrappers) 