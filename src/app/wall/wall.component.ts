import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent {
  chartConfig: Object;
  dataSource: Object;

  constructor() {

    this.chartConfig = {
      width: '300',
      height: '350',
      type: 'column2d',
      dataFormat: 'json',
  };



    //STEP 2 - Chart Data
    const chartData = [
      {
        label: "A",
        value: "90"
      },
      {
        label: "B",
        value: "60"
      },
      {
        label: "C",
        value: "80"
      },
      {
        label: "D",
        value: "65"
      },
      {
        label: "E",
        value: "45"
      }
    ];
    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "Emissions",
        //Set the chart subcaption
        subCaption: "Based on public votes",
        //Set the x-axis name
        xAxisName: "  ",
        //Set the y-axis name
        yAxisName: "",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: chartData
    };
    this.dataSource = dataSource;
  }

}
