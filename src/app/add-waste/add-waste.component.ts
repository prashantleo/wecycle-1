import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {ItemsService} from './../shared/items.service'
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { from } from 'rxjs';

export interface Store {
  value: string;
  viewValue: string;
  
}
export interface Language {
  name: string;
}





@Component({
  selector: 'app-add-waste',
  templateUrl: './add-waste.component.html',
  styleUrls: ['./add-waste.component.scss']
})



export class AddWasteComponent implements OnInit  {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  languageArray: Language[] = [];
  
  @ViewChild('chipList') chipList;
  @ViewChild('resetItemForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedBindingType: string;
  itemForm: FormGroup;

  stores: Store[] = [
    {value: '1', viewValue: 'Tesco ireland'},
    {value: '2', viewValue: 'Lidl'},
    {value: '3', viewValue: 'Aldi'},
    {value: '4', viewValue: 'Spar'},
    {value: '5', viewValue: 'Dunnes Stores'}
  ];

  autoTicks = true;
  showTicks = true;
  step = 1;
  tickInterval = 1;

  ngOnInit(){
    this.submitItemForm();
  }
  constructor(
    public fb:FormBuilder,
    private itemApi: ItemsService
  
  ) { }
  submitItemForm(){
    this.itemForm= this.fb.group({
      recyclables_quantity:[''],
      nonrecyclable_quantity:[''],
      reusables_quantity:[''],
      degradables_quantity:[''],
      store_name: this.stores

    }) 
   }
   add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim() && this.languageArray.length < 5) {
      this.languageArray.push({ name: value.trim() })
    }
    if (input) {

      input.value = '';
    }
  }
   resetForm() {
  
    this.itemForm.reset();
    Object.keys(this.itemForm.controls).forEach(key => {
      this.itemForm.controls[key].setErrors(null)
    });
  }
   submitItem() {
    if (this.itemForm.valid){
      this.itemApi.addItem(this.itemForm.value)

      this.resetForm();
    }
  }

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
