import { Component, Input } from '@angular/core';
import { Run } from 'src/app/shared/models/run.model';

@Component({
  selector: 'app-view-run',
  templateUrl: './view-run.component.html',
  styleUrls: ['./view-run.component.scss']
})
export class ViewRunComponent {
  @Input() run !: Run;
}
