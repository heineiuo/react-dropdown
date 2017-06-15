import React, {Component} from 'react'

class DropDownContent extends Component {

  static contextTypes  = {
    open: React.PropTypes.bool.isRequired
  }

  static defaultProps = {
    style: {},
    className: '',
  }

  render () {
    const {open} = this.context
    return (
      <div style={this.props.style} className={this.props.className}>
        {open ? this.props.children : null}
      </div>
    )
  }
}

export default DropDownContent
