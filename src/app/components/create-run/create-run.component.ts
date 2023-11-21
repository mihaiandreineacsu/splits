import { Component, EventEmitter, Input, Optional, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Game } from 'src/app/shared/models/game.model';
import { Run } from 'src/app/shared/models/run.model';
import { Split } from 'src/app/shared/models/split.model';

@Component({
  selector: 'app-create-run',
  templateUrl: './create-run.component.html',
  styleUrls: ['./create-run.component.scss']
})
export class CreateRunComponent {
  @Input() run = new Run();
  @Output() runChange = new EventEmitter<Run>();

  constructor(@Optional() private dialogRef?: MatDialogRef<CreateRunComponent>) {

  }

  createNewGame() {
    this.run.games.push(new Game());
  }

  removeGame(gameIndex: number) {
    this.run.games.splice(gameIndex, 1);
  }

  createNewSplit(game: Game) {
    game.splits.push(new Split())
  }

  removeSplit(gameIndex: number, splitIndex: number) {
    this.run.games[gameIndex].splits.splice(splitIndex, 1);
  }
}
