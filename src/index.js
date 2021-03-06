import React from 'react'
import _ from 'lodash'

/*
  Adds the provided svg document to the page as an icon. The css class ".icon"
  Ensures that the element will be sized to 1em. and share the current font cssColor
  This class is defined in global.css
*/
export default class Icon extends React.Component {

  render(){
    let style = this.props.style || {}
    style = _.merge({height: "1em", width: "1em", fontSize: this.props.fontSize})

    let iconElement = <use xlinkHref={this.props.icon}></use>
    if(this.props.iconComponent){
      iconElement = React.createElement(this.props.iconComponent, {xlinkHref: this.props.icon})
    }

    return (
      <span {..._.omit(this.props, "icon", "iconComponent", "fontSize")}>
        <svg viewBox="0 0 100 100" width="100%" height="100%" style={style}>
          {iconElement}
        </svg>
      </span>
    )
  }
}
