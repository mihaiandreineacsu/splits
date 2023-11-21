import { Game, GameInterface } from "./game.model";

export interface RunInterface {
    title: string,
    games: GameInterface[]
}

export class Run {
    public title: string = "";
    public games !: Game[];

    constructor(run?: RunInterface) {
        this.title = run?.title || "";
        this.games = run?.games.map(g => new Game(g)) || [];
    }
}