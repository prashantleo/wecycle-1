import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { WallComponent } from './wall/wall.component';
import { AddWasteComponent } from './add-waste/add-waste.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';



import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {ItemsService} from './shared/items.service'
import {  MatChipsModule} from '@angular/material/chips';
import { MatTooltipModule} from '@angular/material/tooltip';
import { FusionChartsModule } from "angular-fusioncharts";
import {  MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'  



//custom imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';



// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { YourStatsComponent } from './your-stats/your-stats.component';
import { RecycleInfoComponent } from './recycle-info/recycle-info.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { from } from 'rxjs';



FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WallComponent,
    AddWasteComponent,
    YourStatsComponent,
    RecycleInfoComponent,
    VotePageComponent,
    LocationsPageComponent
  ],
  imports: [
    FusionChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    NgbModule,
    MatGridListModule,
    CarouselModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatChipsModule,
 MatTooltipModule,
 MatTableModule,
 MatPaginatorModule,
 NgxDaterangepickerMd.forRoot()

 
  


  ],

  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
