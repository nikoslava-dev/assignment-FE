import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFilesComponent } from './my-files/my-files.component';
import { MyTablesComponent } from './my-tables/my-tables.component';
import { MyTableComponent } from './my-table/my-table.component';
import {AppService} from "./app.service";
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from "@ngrx/store";
import {appReducer} from "./state/reducers";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {FilesEffects} from "./state/effects";

@NgModule({
  declarations: [
    AppComponent,
    MyFilesComponent,
    MyTablesComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({"app-state": appReducer}),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([FilesEffects])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
