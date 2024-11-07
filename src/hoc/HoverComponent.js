import React, { Component } from 'react'
import withIncrement from './withIncrement'

class HoverComponent extends Component {
  render() {
    return (
      <div className="bg-warning text-center">
        <h2>testing HOC</h2>
        <h3 className='bg-info' onMouseOver={this.props.incrementProp}>
            Clicked {this.props.countProp} times
        </h3>
      </div>
    )
  }
}

export default withIncrement(HoverComponent)
