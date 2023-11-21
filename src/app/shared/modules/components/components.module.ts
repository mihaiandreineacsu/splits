import { NgModule } from '@angular/core';
import { CreateRunComponent } from 'src/app/components/create-run/create-run.component';

const declarations = [
  CreateRunComponent
];


@NgModule({
  declarations: [...declarations],
  exports : [...declarations]
})
export class ComponentsModule { }
