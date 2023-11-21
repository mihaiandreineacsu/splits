import { Split } from "./split.model";

export class Game {
    private title: string = "";
    private splits!: Split[];

    get abbreviation() {
        return this.title.split(" ").map(w => w[0].toUpperCase());
    }
}