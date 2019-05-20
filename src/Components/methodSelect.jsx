import React, { Component } from 'react';


class MethodSelect extends Component {

  render() {
    return (
      <select id="method" onChange={ (e) => this.setState({ method: e.target.value })} >
      <option value="metric">Metric</option>
      <option value="imperial">Imperial</option>
    </select>
    )
  }
}

export default MethodSelect