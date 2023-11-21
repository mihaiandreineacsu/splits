import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { ComponentsModule } from './shared/modules/components/components.module';
import { SharedModule } from './shared/modules/shared/shared.module';

const imports = [
  BrowserModule,
  AppRoutingModule,
  SharedModule,
  ComponentsModule,
  MaterialModule,
];


@NgModule({
  declarations: [AppComponent],
  imports: [...imports],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
