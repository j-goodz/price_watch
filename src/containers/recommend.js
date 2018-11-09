import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stringify from 'react-stringify';
import * as actionCreators from '../actions/index';

export class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hist_data: [],
            snapshotAvg: 0,
            avgPcnt: 0
        }
    }

    componentDidMount() {
        const snapshotAvg = (
            (
                    this.props.snapshots.m1_price.close +
                    this.props.snapshots.m2_price.close +
                    this.props.snapshots.m3_price.close +
                    this.props.snapshots.m4_price.close +
                    this.props.snapshots.m5_price.close +
                    this.props.snapshots.m6_price.close
            ) / 6
        ).toFixed(2)
        this.setState({ snapshotAvg: snapshotAvg  })

    const avgPcnt = (snapshotAvg / this.props.snapshots.peak_price).toFixed(2)

    // this.props.fetchPriceHist()
    }
	render() {
		return (
            <div>
                <p>The all time high close price for Bitcoin is ${this.props.snapshots.peak_price.close} USD on {this.props.snapshots.peak_price.date}</p>
                <p>Below are price snapshots for the last 6 months (rolling)</p>
                <table width="500px" align="center">
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>{this.props.snapshots.m1_price.date}</td>
                            <td>
                                ${this.props.snapshots.m1_price.close} USD 
                                &nbsp;({ (this.props.snapshots.m1_price.close / this.props.snapshots.peak_price.close).toFixed(2) + "%" } of ATH)
                            </td>
                        </tr>
                        <tr>
                            <td>{this.props.snapshots.m2_price.date}</td>
                            <td>
                                ${this.props.snapshots.m3_price.close} USD 
                                &nbsp;({ (this.props.snapshots.m3_price.close / this.props.snapshots.peak_price.close).toFixed(2) + "%" } of ATH)
                            </td>
                            </tr>
                        <tr>
                            <td>{this.props.snapshots.m3_price.date}</td>
                            <td>
                                ${this.props.snapshots.m3_price.close} USD 
                                &nbsp;({ (this.props.snapshots.m3_price.close / this.props.snapshots.peak_price.close).toFixed(2) + "%" } of ATH)
                            </td>
                        </tr>
                        <tr>
                            <td>{this.props.snapshots.m4_price.date}</td>
                            <td>
                                ${this.props.snapshots.m4_price.close} USD 
                                &nbsp;({ (this.props.snapshots.m4_price.close / this.props.snapshots.peak_price.close).toFixed(2) + "%" } of ATH)
                            </td>
                            </tr>
                        <tr>
                            <td>{this.props.snapshots.m5_price.date}</td>
                            <td>
                                ${this.props.snapshots.m5_price.close} USD 
                                &nbsp;({ (this.props.snapshots.m5_price.close / this.props.snapshots.peak_price.close).toFixed(2) + "%" } of ATH)
                            </td>
                            </tr>
                        <tr>
                            <td>{this.props.snapshots.m6_price.date}</td>
                            <td>
                                ${this.props.snapshots.m6_price.close} USD 
                                &nbsp;({ (this.props.snapshots.m6_price.close / this.props.snapshots.peak_price.close).toFixed(2) + "%" } of ATH)
                            </td>
                            </tr>
                    </tbody>
                </table>
                <br />

                { this.state.snapshotAvg}

                <p>
                    This price recommendation is based on several concepts. <a href="https://www.investopedia.com/articles/active-trading/070715/making-money-wyckoff-way.asp">Wyckoff Way</a> used to identify historical patterns, <a href="https://en.wikipedia.org/wiki/Hype_cycle">Hype Cycles</a>, and an analysis of Bitcoin price patterns during market cycles such as <a href="https://medium.com/@coinscrum/first-anniversary-review-of-the-fractal-relationship-between-bitcoins-first-two-bubbles-and-what-c548eb2647b9"> the fractal relationship between bitcoin's first two bubbles and what they might tell us about a third.</a>
                </p>

            </div>
        );
	}
}

const mapStateToProps = (state) => {
    const { price_hist, snapshots } = state
    return { price_hist, snapshots }
}

export default connect (mapStateToProps)(Recommend)