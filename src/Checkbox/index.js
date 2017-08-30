import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: true
    }
  }

  onClick = (event) => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render () {
    return (
      <div className="checkbox">
        <div className="checkbox-core" onClick={this.onClick}>
        </div>
        <div className="checkbox-label">
          {this.props.label}
        </div>
      </div>
    )
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default Checkbox
