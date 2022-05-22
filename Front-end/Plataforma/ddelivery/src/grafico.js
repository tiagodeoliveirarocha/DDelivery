import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["12/04/2022", "13/04/2022", "14/04/2022", "15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022"]
        }
      },
      series: [
        {
          name: "Objetos",
          data: [15, 13, 14, 13, 12, 11, 14, 9]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Donut;