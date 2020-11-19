import React, { Component } from 'react';
import './Timepicker.css';

export default class Timepicker extends Component {
  render() {
    return (
      <div className="Timepicker">
        {this.props.times.map((time, index) =>
          <div className="time" key={ index }>{ time }</div>
        )}
      </div>
    )
  }
}
