import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WallComponent } from './wall/wall.component';
import {AddWasteComponent} from './add-waste/add-waste.component';


const routes: Routes = [

//add routing link of pages 
{path:'home', component: HomeComponent},
{path:'wall', component: WallComponent},
{path:'add-waste', component:AddWasteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
