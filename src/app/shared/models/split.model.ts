export interface SplitInterface {
    title: string,
    done: boolean
}

export class Split {
    public title: string = "";
    public done: boolean = false;

    constructor(split?: SplitInterface) {
        this.title = split?.title || "";
        this.done = split?.done || false;
    }
}