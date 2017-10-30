/**
*
* LifeMapChart
*
*/

import React from 'react';
// import styled from 'styled-components';
import { select } from 'd3-selection';
import Chart from './Chart';
import ChartContainer from './styles';


class LifeMapChart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.updateChart = this.updateChart.bind(this);
    this.chartFn = Chart();
  }

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    console.log(this.chartContainer.clientHeight);
    select(this.chartContainer)
      .data([this.props.events])
      .call(this.chartFn
        .height(this.chartContainer.clientHeight)
        .width(this.chartContainer.clientWidth));
  }


  render() {
    return (
      <ChartContainer innerRef={(div) => (this.chartContainer = div)} />
    );
  }
}

LifeMapChart.propTypes = {

};

export default LifeMapChart;
