import { Split, SplitInterface } from "./split.model";

export interface GameInterface {
    title: string,
    splits: SplitInterface[]
}

export class Game {
    public title: string = "";
    public splits!: Split[];

    constructor(game?: GameInterface){
        this.title = game?.title || "";
        this.splits = game?.splits.map(s => new Split(s)) || [];
    }

    get abbreviation() {
        return this.title.split(" ").map(w => w[0].toUpperCase());
    }
}