import * as d3 from 'd3';
import { select } from 'd3-selection';
import 'd3-transition';
import _ from 'lodash';

const Chart = () => {
  let height = 300;
  let width = 300;
  let margin = {
    left: 35,
    top: 35,
    right: 35,
    bottom: 35,
  };

  const chart = (selection) => {
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    /**
     * Define D
     * D.years = an array of ints representing the years
     * D.adversary = an array of values representing the adversary at a specific domain
     * D.baseline = an array of values representing the baseline at a specific domain
     * Portfolios
     */
    selection.each(function chartIterator(D) {
      const container = select(this);
      console.log(D);
      const DOrdered = _.orderBy(D, 'age');
      console.log(DOrdered);

      /**
       * Create svg
       */
      let svg = container.selectAll('svg')
        .data([DOrdered]);

      // ENTER
      const svgEnter = svg.enter().append('svg');

      // ENTER + UPDATE
      svg = svgEnter.merge(svg)
        .attr('width', width)
        .attr('height', height);

      /**
       * Create highest level chart group
       */
      let g = svg.select('.chart-group');

      // ENTER
      const gEnter = svgEnter.append('g')
        .attr('class', 'chart-group');

      // ENTER + UPDATE
      g = gEnter.merge(g)
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      // /**
      //  * Create x scale, domain, & axis
      //  */
      const x = d3.scaleLinear()
        .range([0, innerWidth])
        .domain([
          d3.min(D, (d) => d.age),
          d3.max(D, (d) => d.age),
        ]);
      let xAxis = g.select('.x-axis');

      // // ENTER
      const xAxisEnter = gEnter.append('g')
        .attr('class', 'x-axis');

      console.log(x.domain())
      // UPDATE + ENTER
      xAxis = xAxis.merge(xAxisEnter)
        .attr('transform', `translate(0, ${innerHeight})`)
        .call(d3.axisBottom(x)
          .ticks(x.domain()[1] - x.domain()[0]));

      /**
       * Create y scale, domain
       */
      const y = d3.scaleLinear()
        .range([innerHeight, 0])
        .domain([-10, 10]);
      let yAxis = g.select('.y-axis');

      // ENTER
      const yAxisEnter = gEnter.append('g')
        .attr('class', 'y-axis');

      // UPDATE + ENTER
      yAxis = yAxis.merge(yAxisEnter)
        .call(d3.axisLeft(y));

      let eventCircles = g.selectAll('.event-circle')
        .data(DOrdered);

      const eventCirclesEnter = eventCircles
       .enter().append('circle')
        .attr('class', 'event-circle');

      eventCircles = eventCircles.merge(eventCirclesEnter)
        .attr('cx', (d) => x(d.age))
        .attr('cy', (d) => y(d.level))
        .attr('r', 3);
    });
  };

  chart.margin = function marginGetterSetter(val) {
    if (!arguments.length) return margin;
    margin = val;
    return chart;
  };

  chart.width = function widthGetterSetter(val) {
    if (!arguments.length) return width;
    width = val;
    return chart;
  };

  chart.height = function heightGetterSetter(val) {
    if (!arguments.length) return height;
    height = val;
    return chart;
  };

  return chart;
};

export default Chart;
