import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

const imports = [
  BrowserAnimationsModule,
  CommonModule
];

@NgModule({
  declarations: [],
  imports: [...imports],
  exports : [...imports]
})
export class SharedModule { }
