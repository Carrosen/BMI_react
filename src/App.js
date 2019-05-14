import React, { Component } from 'react';
import DisplayResult from './Components/displayResult'
import './App.css';
import { Container, Grid, Header } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  render() {
    return (
      <>
      <Container>
        <Grid centered columns={3}>
          <Grid.Column>
            <Header
            as="h1"
            textAlign="center"
            >
              BMI Converter
            </Header>
          </Grid.Column>
        </Grid>
      </Container>

        <select id="method" value={this.state.method} onChange={ (e) => this.setState({ method: e.target.value })} >
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>

        <div>
          <div>
            <label>Weight</label>
            <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
          </div>

          <div>
            <label>Height</label>
            <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
          </div>
       </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
          />
      </>
    );
  }
}

export default App;