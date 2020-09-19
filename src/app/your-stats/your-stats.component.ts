import { Component, OnInit } from '@angular/core';
import {ItemsService} from './../shared/items.service'
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';





@Component({
  selector: 'app-your-stats',
  templateUrl: './your-stats.component.html',
  styleUrls: ['./your-stats.component.scss']
})
export class YourStatsComponent implements OnInit  {
  
  form: FormGroup;
  form2: FormGroup;

  

  chartConfig: Object;
  dataSource: Object;

  constructor(private itemsService:ItemsService,private fb:FormBuilder) {
    
    this.form = this.fb.group({
      selected: [{
        startDate: moment('2019-11-24T00:00Z'),
        endDate: moment('2019-11-26T00:00Z')
      }, Validators.required],
    });
   
   
    

    this.chartConfig = {
      width: '100%',
      height: '350',
      type: 'column2d',
      dataFormat: 'json',
  };
  

    //STEP 2 - Chart Data
    const chartData = [
      {
        label: "degradables_quantity",
        value: 34
      },
      {
        label: "nonrecyclable_quantity",
        value: 60
      },
      {
        label: "recyclables_quantity",
        value: 80
      },
      {
        label: "reusables_quantity",
        value: 65
      }
    ];
    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "Your emissions",
        //Set the chart subcaption
        subCaption: "Based on your waste input",
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
  submit() {
    let dBdata
    let newDate= this.form.value.selected.startDate.valueOf();
    let oldDate=this.form.value.selected.endDate.valueOf();
    
    this.itemsService.getDateRange(newDate,oldDate).then((res:any)=>{
      console.log(res);
      // calculating total of each key in the result.
      const total = res.reduce((total, r) => ({
        degradables_quantity: total.degradables_quantity + r.degradables_quantity,
        nonrecyclable_quantity: total.nonrecyclable_quantity + r.nonrecyclable_quantity,
        recyclables_quantity: total.recyclables_quantity+ r.recyclables_quantity,
        reusables_quantity: total.reusables_quantity + r.reusables_quantity
      }), 
      { 
        degradables_quantity: 0, 
        nonrecyclable_quantity: 0,
        recyclables_quantity: 0, 
        reusables_quantity: 0
      });
      console.log(total);
      const average = {};
      // calculating average.
      Object.keys(total).forEach((key) => average[key] = total[key]/res.length)
      console.log(average);
      this.dataSource['data'].forEach(element => {
        element.value = average[element.label];
      });
    })   
  }
  


  ngOnInit() {
    let dbData;
    this.itemsService.getItem().then((res: any) => {
     this.dataSource['data'].forEach(element => {
       element.value = res[element.label];
     });
    })
    
  }
}


