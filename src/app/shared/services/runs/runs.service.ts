import { Injectable } from '@angular/core';
import { Run, RunInterface } from '../../models/run.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RunsService {

  runs$!: BehaviorSubject<Run[]>;

  constructor() {
    this.runs$ = new BehaviorSubject(this.runs);
  }

  set runs(runs: Run[]) {
    try {
      localStorage.setItem("runs", JSON.stringify(runs));
    } catch (err) {
      alert(err);
    }

  }

  get runs(): Run[] {
    try {
      let runs = JSON.parse(localStorage.getItem("runs") || "[]") as RunInterface[];
      return runs.map((r: RunInterface) => new Run(r));
    } catch (err) {
      alert(err);
      return [];
    }
  }
}
