import React, { Component } from 'react';
import DisplayResult from './Components/displayResult'
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
        <h1>BMI Converter</h1>
        <select id="method">
        {/*  connect option to div through id's?? when on click on an option show that*/}
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>

        <div id="metric_inputs">
          <div>
            <label>Weight(kg)</label>
            <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
          </div>

          <div>
            <label>Height</label>
            <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
          </div>
       </div>


       <div id="imperial_inputs">
        <div>
          <label>Weight(lbs)</label>
          <input name="weight-in-lbs" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
        </div>

        <div>
          <label>Height(in)</label>
          <input name="height-in-in" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
        </div>
      </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          />
      </>
    );
  }
}

export default App;