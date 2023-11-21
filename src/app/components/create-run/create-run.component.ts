import { Component } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { Run } from 'src/app/shared/models/run.model';
import { Split } from 'src/app/shared/models/split.model';

@Component({
  selector: 'app-create-run',
  templateUrl: './create-run.component.html',
  styleUrls: ['./create-run.component.scss']
})
export class CreateRunComponent {
  panelOpenState = false;
  run = new Run();

  createNewGame() {
    this.run.games.push(new Game());
  }

  removeGame(gameIndex: number){
    this.run.games.splice(gameIndex, 1);
  }

  createNewSplit(game: Game) {
    game.splits.push(new Split())
  }

  removeSplit(gameIndex: number, splitIndex: number){
    this.run.games[gameIndex].splits.splice(splitIndex, 1);
  }
}
