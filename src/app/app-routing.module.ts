import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WallComponent } from './wall/wall.component';
import {AddWasteComponent} from './add-waste/add-waste.component';
import { YourStatsComponent } from './your-stats/your-stats.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { RecycleInfoComponent } from './recycle-info/recycle-info.component';


const routes: Routes = [

//add routing link of pages 
{path:'home', component: HomeComponent},
{path:'wall', component: WallComponent},
{path:'add-waste', component:AddWasteComponent},
{path:'your-stats', component:YourStatsComponent},
{path:'locations', component:LocationsPageComponent},
{path:'vote-page', component:VotePageComponent},
{path:'recycle-info', component:RecycleInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
