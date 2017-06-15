import React, {Component} from 'react'

class DropDownTrigger extends Component {

  static contextTypes  = {
    toggle: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    style: {},
    className: '',
    type: 'click'
  }

  handleClick = () => {
    if (this.props.type == 'click') this.context.toggle()
  }

  render () {
    return (
      <div 
        style={this.props.style}
        className={this.props.className}
        onClick={this.handleClick}
      >{this.props.children}</div>
    )
  }
}

export default DropDownTrigger
