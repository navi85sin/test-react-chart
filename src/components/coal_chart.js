import React, { Component } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

class coalchart extends Component {

  formatData() {
    var fromData = {}
    var valData = {};
    var toData = {};
    fromData['name'] = this.props.apiFuelData.data.from;
    valData['name'] = '';
    toData['name'] = this.props.apiFuelData.data.to;
    console.log(this.props.apiFuelData);
    this.props.apiFuelData.data.generationmix.forEach(function (index) {
      if (index.fuel == 'coal'){
        valData[index.fuel] = index.perc;
        fromData[index.fuel] = '';
        toData[index.fuel] = '';
      }

    });
    let frdata = [fromData, fromData, valData, toData];
    return frdata;
  }

  render() {
    return (
      <div>
        <AreaChart
          width={500}
          height={400}
          data={this.formatData()}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="coal" stackId="1" stroke="#961b1b" fill="#961b1b" />
        </AreaChart>
      </div>
    );
  }
}
export default coalchart;