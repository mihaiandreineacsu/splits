import { NgModule } from '@angular/core';
import { CreateRunComponent } from 'src/app/components/create-run/create-run.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RunsComponent } from 'src/app/components/runs/runs.component';

const declarations = [
  CreateRunComponent,
  RunsComponent
];

const imports = [
  SharedModule,
  MaterialModule
]


@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...declarations, ...imports]
})
export class ComponentsModule { }
