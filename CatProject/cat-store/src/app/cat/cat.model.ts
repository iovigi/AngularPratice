import { Behavior } from '../shared/behavior.model';

export class Cat {
    public name: string;
    public description: string;
    public imagePath: string;
    public behaviors: Behavior[];

    constructor(name: string, description: string, imagePath: string, behaviors: Behavior[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.behaviors = behaviors;
    }
}