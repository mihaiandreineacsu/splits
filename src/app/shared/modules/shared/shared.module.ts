import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const imports = [
  BrowserAnimationsModule,
  CommonModule,
  FormsModule
];

@NgModule({
  declarations: [],
  imports: [...imports],
  exports : [...imports]
})
export class SharedModule { }
