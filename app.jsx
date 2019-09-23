import React, { Component } from 'react';
import { fuelAPIData } from './api/fuel_api'


import Chart from './components/charts';
import Coalchart from './components/coal_chart';
import Gaschart from './components/gas_chart';

import './css/fuel.css';


class appChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fuelData: null,
            isLoading: true,
            formatDataArray: []
        }
    }
    componentWillMount() {
        fuelAPIData().then(data => {
            this.setState({ fuelData: data.entity })
            this.setState({ isLoading: false })
        })
    }
    render() {
        return (
            this.state.isLoading ? <h1>loading</h1> :
                <div><h1>Fuel Consumptions</h1>
                    <ul className="charts">
                        <li><Chart apiFuelData={this.state.fuelData} /><div className="label">All Fuels</div></li>
                        <li><Coalchart apiFuelData={this.state.fuelData} /><div className="label">Coal Consumptions</div></li>
                        <li><Gaschart apiFuelData={this.state.fuelData} /><div className="label">Gas Consumptions</div></li>
                    </ul>
                </div>
        )
    }
}
const App = appChart;

export {
    App
}