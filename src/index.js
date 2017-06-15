import React, {Component} from 'react'
import ClickOutside   from '@react-shared/click-outside'

import DropDownTrigger from './DropDownTrigger'
import DropDownContent from './DropDownContent'

class DropDown extends Component {

  static defaultProps = {
    style: {},
    className: '',
    trigger: 'click',
    onToggle: e => {}
  }

  state = {
    open: false
  }

  toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
    this.props.onToggle(!open)
  }

  show = () => {
    this.setState({ open: true })
    this.props.onToggle(true)
  }

  hide = () => {
    this.setState({ open: false })
    this.props.onToggle(false)
  }

  static childContextTypes = {
    trigger: React.PropTypes.string.isRequired,
    toggle: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired
  }

  getChildContext  = () => {
    return {
      trigger: this.props.trigger,
      toggle: this.toggle,
      open: this.state.open
    }
  }

  render () {
    if (this.props.trigger == 'hover') {
      return (
        <div className={cx('DropDown')} style={this.props.style}>
          <div onMouseEnter={this.show} onMouseLeave={this.hide}>
            {this.props.children}
          </div>
        </div>
      )
    }

    return (
      <div className={this.props.className} style={this.props.style}>
        <ClickOutside  onClickOutside={this.hide} >
          {this.props.children}
        </ClickOutside >
      </div>
    )

  }
}

export default DropDown
export {
  DropDown,
  DropDownTrigger,
  DropDownContent
}