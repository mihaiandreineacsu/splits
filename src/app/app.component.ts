import { Component, OnDestroy } from '@angular/core';
import { RunsService } from './shared/services/runs/runs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'splits';
  runsSubscription: Subscription;

  constructor(private runsS: RunsService) {
    this.runsSubscription = this.runsS.runs$.subscribe(runs => this.runsS.runs = runs);
  }
  ngOnDestroy(): void {
    this.runsSubscription.unsubscribe();
  }
}
