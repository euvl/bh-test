import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class Checkbox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: false
    }
  }

  onClick = (event) => {
    this.setState({
      checked: !this.state.checked
    })

    if (this.props.onChange) {
      this.props.onChange({
        checked: this.state.checked
      })
    }
  }

  renderCheckboxState () {
    if (this.state.checked) {
      return <div className="checkbox-checked"></div>
    }

    return null
  }

  render () {
    return (
      <div className="checkbox">
        <div className="checkbox-core"
             onClick={this.onClick}>
          {this.renderCheckboxState()}
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
