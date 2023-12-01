import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Run } from 'src/app/shared/models/run.model';
import { CreateRunComponent } from '../create-run/create-run.component';
import { BehaviorSubject, Subscription } from 'rxjs';
import { RunsService } from 'src/app/shared/services/runs/runs.service';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.scss']
})
export class RunsComponent implements OnDestroy {
  runs: Run[] = [];
  dialogRefAddSub!: Subscription;
  dialogRefEditSub!: Subscription;

  constructor(private dialog: MatDialog, private runsS: RunsService) {
    this.runs = this.runsS.runs;
  }
  ngOnDestroy(): void {
    this.dialogRefAddSub?.unsubscribe();
    this.dialogRefEditSub?.unsubscribe();
  }

  openDialogAddRun() {
    const dialogRef = this.dialog.open(CreateRunComponent);
    this.dialogRefAddSub = dialogRef.afterClosed().subscribe(run => {
      if (run) {
        this.runs.push(run);
        this.runsS.runs$.next(this.runs);
      }
    });
  }

  openDialogEditRun(run: Run) {
    const dialogRef = this.dialog.open(CreateRunComponent);
    dialogRef.componentInstance.run = run;
    this.dialogRefEditSub = dialogRef.afterClosed().subscribe(() => {
      this.runsS.runs$.next(this.runs);
    });
  }



}
