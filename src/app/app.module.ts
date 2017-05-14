import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent }  from './app.component';
import {IfSampleComponent} from "./app.ifsample.component";
import {SwitchSampleComponent} from "./app.switchsample.component";
import {ForSampleComponent} from "./app.forsample.component";
import {PipeSampleComponent} from "./app.pipesample.component";
import {AsteriskSampleComponent} from "./app.asterisksample.component";
import {NgClassSampleComponent} from "./app.ngclasssample.component";
import {NgStyleSampleComponent} from "./app.ngstylesample.component";
import {ElvisSampleComponent} from "./app.elvissample.component";
import {NgContentSampleComponent} from "./app.ngcontentsample.component";
import {CustomPipeSampleComponent} from "./app.custompipesample.component";
import {HaxorPipe} from './haxor.pipe';
import {SuperPanelComponent} from "./super.panel.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent,
    IfSampleComponent,
    SwitchSampleComponent,
    ForSampleComponent,
    AsteriskSampleComponent,
    PipeSampleComponent,
    CustomPipeSampleComponent,
    NgClassSampleComponent,
    NgStyleSampleComponent,
    NgContentSampleComponent,
    ElvisSampleComponent,
    SuperPanelComponent,
    HaxorPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
