import React, { Component } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

class chart extends Component {

  formatData() {
    var fromData = {}
    var valData = {};
    var toData = {};
    fromData['name'] = this.props.apiFuelData.data.from;
    valData['name'] = '';
    toData['name'] = this.props.apiFuelData.data.to;
    this.props.apiFuelData.data.generationmix.forEach(function (index) {
      valData[index.fuel] = index.perc;
      fromData[index.fuel] = '';
      toData[index.fuel] = '';
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
            <Area type="monotone" dataKey="biomass" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="coal" stackId="1" stroke="#961b1b" fill="#961b1b" />
            <Area type="monotone" dataKey="gas" stackId="1" stroke="#e29366" fill="#e29366" />
            <Area type="monotone" dataKey="hydro" stackId="1" stroke="#e266e2" fill="#e266e2" />
            <Area type="monotone" dataKey="imports" stackId="1" stroke="#79f2f0" fill="#79f2f0" />
            <Area type="monotone" dataKey="nuclear" stackId="1" stroke="#79f287" fill="#79f287" />
            <Area type="monotone" dataKey="other" stackId="1" stroke="#f2de79" fill="#f2de79" />
            <Area type="monotone" dataKey="solar" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="wind" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
      </div>
    );
  }
}
export default chart;