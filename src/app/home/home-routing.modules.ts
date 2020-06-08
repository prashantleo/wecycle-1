import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddWasteComponent } from '../add-waste/add-waste.component';


const routes: Routes = [

    //add routing link of pages 
    {path:'add-waste', component:AddWasteComponent}
    
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class HomeRoutingModule { }
    