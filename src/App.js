import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: ''
    }
  }
  
  render() {
    return (
      <>
        <div>
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
        </div>

        <div>
          <label>Height</label>
          <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })}/>
        </div>
      </>
    );
  }
}

export default App;
