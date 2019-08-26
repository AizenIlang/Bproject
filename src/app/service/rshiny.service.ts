import { Injectable } from '@angular/core';
import * as d3 from "d3";
import * as ss from 'simple-statistics'

@Injectable({
  providedIn: 'root'
})
export class RshinyService {
  
  data : any;
  constructor() { }

  WebPlot(theNumber,theNumber2){

  }

  temp(theNumber,theNumber2){

  }
  barplot(theNumber){
    
  }

  erfinv (x) {
    let a = 8 * (Math.PI - 3) / (3 * Math.PI * (4 - Math.PI));
    
    
      const b = Math.log(1 - x * x);
      const c = b / 2 + (2 / (Math.PI * a));
      return Math.sign(x) * Math.sqrt(Math.sqrt((c * c) - b / a) - c);
    
  }
  qqnorm(data) {
    const width = 640;
    const height = 640;
    const margin = ({top: 20, right: 40, bottom: 30, left: 40});
    

    const qnorm = p => Math.SQRT2 * this.erfinv(2 * p - 1);
  
    
    const qy = Float64Array.from(data).sort(d3.ascending);
    const n = qy.length;
    const a = n <= 10 ? 5 / 8 : 0.5;
    const z = i => qnorm((i + a) / (n + 1 - 2 * a));
  
    const x = d3.scaleLinear()
        .domain([-3, 3])
        .range([margin.left, width - margin.right]);
  
    const regression = x.domain().map(
        ss.linearRegressionLine(
        ss.linearRegression(
        Array.from(qy, (d, i) => ([z(i), d])))));
  
    const y = d3.scaleLinear()
        .domain(regression).nice()
        .range([height - margin.bottom, margin.top]);
  
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .style("max-width", `${width}px`);
  
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom + 6})`)
        .call(d3.axisBottom(x.copy().interpolate(d3.interpolateRound)).ticks(null, "+f"))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("stroke-opacity", 0.1)
            .attr("y1", -height))
        .call(g => g.append("text")
            .attr("x", width - margin.right)
            .attr("y", -3)
            .attr("fill", "currentColor")
            .attr("font-weight", "bold")
            .text("z"));
  
    svg.append("g")
        .attr("transform", `translate(${margin.left - 6},0)`)
        .call(d3.axisLeft(y.copy().interpolate(d3.interpolateRound)))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("stroke-opacity", 0.1)
            .attr("x1", width));
  
    svg.append("line")
        .attr("stroke", "currentColor")
        .attr("stroke-opacity", 0.3)
        .attr("x1", x.range()[0])
        .attr("x2", x.range()[1])
        .attr("y1", y(regression[0]))
        .attr("y2", y(regression[1]));
  
    svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(d3.range(n))
      .join("circle")
        .attr("cx", i => x(z(i)))
        .attr("cy", i => y(qy[i]))
        .attr("r", 3);
  
    return svg.node();
  }

   histogram(data) {
    const width = 640;
    const height = 240;
    const margin = ({top: 20, right: 20, bottom: 30, left: 40});
  
    const x = d3.scaleLinear()
        .domain(d3.extent(data)).nice()
        .range([margin.left, width - margin.right]);
  
    const bins = d3.histogram()
        .domain(x.domain())
        .thresholds(x.ticks(50))
      (data);
  
    const y = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length)]).nice()
        .range([height - margin.bottom, margin.top]);
  
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .style("max-width", `${width}px`);
    
    const bar = svg.append("g")
        .attr("fill", "steelblue")
      .selectAll("rect")
      .data(bins)
      .join("rect")
        .attr("x", d => x(d.x0) + 1)
        .attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 1))
        .attr("y", d => y(d.length))
        .attr("height", d => y(0) - y(d.length));
  
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));
  
    svg.append("g")
        .attr("transform", `translate(${margin.left - 6},0)`)
        .call(d3.axisLeft(y).ticks(5))
        .call(g => g.select(".domain").remove());
  
    return svg.node();
  }


  chart() {
   let height = 70; 
   let width = 500;
   let margin = ({top: 10, right: 20, bottom: 20, left: 20});
   let x = d3.scaleLinear([0, 7], [margin.left, width - margin.right]);
   let ry = d3.randomNormal(height / 2, height / 12);
   let rx = d3.randomUniform(...x.domain());
   let xAxis = g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x));

    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);
  
    const brush = d3.brushX()
        .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]])
        .on("start brush end", brushed);
  
    const circle = svg.append("g")
        .attr("fill-opacity", 0.2)
      .selectAll("circle")
      .data(Float64Array.from({length: 100 * 2}, rx))
      .join("circle")
        .attr("transform", d => `translate(${x(d)},${ry()})`)
        .attr("r", 3.5);
  
    svg.append("g")
        .call(xAxis);
  
    svg.append("g")
        .call(brush)
        .call(brush.move, [3, 5].map(x))
        .call(g => g.select(".overlay")
            .datum({type: "selection"})
            .on("mousedown touchstart", beforebrushstarted));
  
    function beforebrushstarted() {
      const dx = x(1) - x(0); // Use a fixed width when recentering.
      const [cx] = d3.mouse(this);
      const [x0, x1] = [cx - dx / 2, cx + dx / 2];
      const [X0, X1] = x.range();
      d3.select(this.parentNode)
          .call(brush.move, x1 > X1 ? [X1 - dx, X1] 
              : x0 < X0 ? [X0, X0 + dx] 
              : [x0, x1]);
    }
  
    function brushed() {
      const selection = d3.event.selection;
      if (selection === null) {
        circle.attr("stroke", null);
      } else {
        const [x0, x1] = selection.map(x.invert);
        circle.attr("stroke", d => x0 <= d && d <= x1 ? "red" : null);
      }
    }
  
    return svg.node();
  }

  bollinger(values, N, K) {
    let i = 0;
    let sum = 0;
    let sum2 = 0;

    let height = 600;
    let width = 300;
    let margin = ({top: 10, right: 20, bottom: 30, left: 40});

   
    let x = d3.scaleTime()
    .domain(d3.extent(this.data, d => d.date))
    .rangeRound([margin.left, width - margin.right]);

    let y = d3.scaleLog()
    .domain(d3.extent(values))
    .rangeRound([height - margin.bottom - 20, margin.top]);

   
    let line = d3.line()
    .defined(d => !isNaN(d))
    .x((d, i) => x(this.data[i].date))
    .y(y);    

    
    


    const bands = K.map(() => new Float64Array(values.length).fill(NaN));
    for (let n = Math.min(N - 1, values.length); i < n; ++i) {
      const value = values[i];
      sum += value, sum2 += value ** 2;
    }
    for (let n = values.length, m = bands.length; i < n; ++i) {
      const value = values[i];
      sum += value, sum2 += value ** 2;
      const mean = sum / N;
      const deviation = Math.sqrt((sum2 - sum ** 2 / N) / (N - 1));
      for (let j = 0; j < K.length; ++j) {
        bands[j][i] = mean + deviation * K[j];
      }
      const value0 = values[i - N + 1];
      sum -= value0, sum2 -= value0 ** 2;
    }
    return bands;
  }


   async MultiLine(N,K) {
    let height = 500;
    let width = 1000;
    let margin = ({top: 10, right: 20, bottom: 30, left: 40});
    
    this.data = Object.assign((await d3.csv("https://gist.githubusercontent.com/mbostock/14613fb82f32f40119009c94f5a46d72/raw/d0d70ffb7b749714e4ba1dece761f6502b2bdea2/aapl.csv", d3.autoType)).map(({date, close}) => ({date, value: close})), {y: "$ Close"});
    let values = Float64Array.from(this.data, d=> d); //ignore the d.value should return a value
    // this.data = [{'date' : '2017-04-23', 'value': '83.4'},
    // {'date' : '2017-04-23', 'value': '23.4'},
    // {'date' : '2017-04-23', 'value': '54.4'},
    // {'date' : '2017-04-23', 'value': '63.2'}];
    // let values : Array<number>;
    // values = [23,43,23];
    // for(var tempData of this.data){
    //   values.push(tempData.value);
    //   console.log(tempData.value + "  ampota");
    // }

    let x = d3.scaleTime()
    .domain(d3.extent(this.data, d =>d.value))
    .rangeRound([margin.left, width - margin.right]);

    let y = d3.scaleLog()
    .domain(d3.extent(values))
    .rangeRound([height - margin.bottom - 20, margin.top]);

    let xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80))
    .call(g => g.select(".domain").remove());

    let yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickValues(d3.ticks(...y.domain(), 10)).tickFormat(d => d))
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick line").clone()
        .attr("x2", width - margin.left - margin.right)
        .attr("stroke-opacity", 0.1))
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(this.data.y));


        let line = d3.line()
        .defined(d => !isNaN(d))
        .x((d, i) => x(this.data[i].date))
        .y(y);

    const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
        .style("overflow", "visible");
  
    svg.append("g")
        .call(xAxis);
  
    svg.append("g")
        .call(yAxis);
  
    svg.append("g")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
      .selectAll("path")
      .data([values, this.bollinger(values, N, [-K, 0, +K])])
      .join("path")
        .attr("stroke", (d, i) => ["#aaa", "green", "blue", "red"][i])
        .attr("d", line);
  
    return svg.node();
  }

  getRSquared(predict, data) {
    
    var yAxis = data;
    var rPrediction = [];

    var meanValue = 0; // MEAN VALUE
    var SStot = 0; // THE TOTAL SUM OF THE SQUARES
    var SSres = 0; // RESIDUAL SUM OF SQUARES
    var rSquared = 0;

    // SUM ALL VALUES
    for (var n in yAxis) { meanValue += yAxis[n]; }

    // GET MEAN VALUE
    meanValue = (meanValue / yAxis.length);
    
    for (var n in yAxis) { 
        // CALCULATE THE SSTOTAL    
        SStot += Math.pow(yAxis[n] - meanValue, 2); 
        // REGRESSION PREDICTION
        rPrediction.push(predict(n));
        // CALCULATE THE SSRES
        SSres += Math.pow(rPrediction[n] - yAxis[n], 2);
    }

    // R SQUARED
    rSquared = 1 - (SSres / SStot);

    return {
        meanValue: meanValue,
        SStot: SStot,
        SSres: SSres,
        rSquared: rSquared
    };
}




}
