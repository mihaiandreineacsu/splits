import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Run } from 'src/app/shared/models/run.model';
import { CreateRunComponent } from '../create-run/create-run.component';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.scss']
})
export class RunsComponent implements OnInit {
  runs : Run[] = [];

  constructor(private dialog: MatDialog){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialogAddRun(){
    const dialogRef = this.dialog.open(CreateRunComponent);
  }

}
