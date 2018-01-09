import React, { Component } from 'react';

import TemperatureInput from './TemperatureInput.jsx';
import BoilingVerdict from './BoilingVerdict.jsx';
import tryConvert from './tryConvert';
import toFahrenheit from './toFahrenheit';

class Calculator extends Component {
  state = {
    temperature: '', scale: 'c'
  }
  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c', temperature
    });
    console.log(this.state.scale, this.state.temperature)
  }
  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f', temperature
    });
    console.log(this.state.scale, this.state.temperature)
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
