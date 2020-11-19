import React, { Component } from 'react';
import Timepicker from '../../components/Timepicker/Timepicker';
import './Theaterpicker.css';

export default class Theaterpicker extends Component {
  render() {
    return (
      <div className="Theaterpicker">
        <div className="title">{ this.props.theater.name }</div>

        <div className="times">
          <Timepicker times={ this.props.theater.times } />
        </div>
      </div>
    )
  }
}
