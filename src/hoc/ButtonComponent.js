import React, { Component } from 'react'
import withIncrement from './withIncrement'

class ButtonComponent extends Component {
  render() {
    return (
      <div className="bg-warning text-center">
        <h2>Button component - testing HOC</h2>
        <button className='btn btn-success' onClick={this.props.incrementProp}>
            Clicked {this.props.countProp} times
        </button>
      </div>
    )
  }
}

export default withIncrement(ButtonComponent)
