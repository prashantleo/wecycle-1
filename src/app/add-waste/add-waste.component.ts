import { Component, OnInit } from '@angular/core';

interface Store {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-add-waste',
  templateUrl: './add-waste.component.html',
  styleUrls: ['./add-waste.component.scss']
})



export class AddWasteComponent  {

  stores: Store[] = [
    {value: '1', viewValue: 'Tesco ireland'},
    {value: '2', viewValue: 'Lidle'},
    {value: '3', viewValue: 'Aldi'},
    {value: '4', viewValue: 'Spar'},
    {value: '5', viewValue: 'Dunnes Stores'}
  ];

  autoTicks = true;
  showTicks = true;
  step = 1;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }



  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value);
    }

    return value;
  }

}
