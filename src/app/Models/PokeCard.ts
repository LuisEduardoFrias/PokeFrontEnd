import { Ability } from './Ability';
import { Move } from './Move';
import { Type_ } from './Type_';

export class PokeCard{
    name: String;
    urlImage: String;
    base_experience:number;
    height: number;
    weight: number;
    types: Type_[];
    abilities: Ability[];
    moves: Move[];

    constructor(
    name: String,
    urlImage: String,
    base_experience:number,
    height: number,
    weight: number,
    types: Type_[],
    abilities: Ability[],
    moves: Move[]) {
        
        this.name = name;
        this.urlImage = urlImage;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.types = types;
        this.abilities = abilities;
        this.moves = moves;
    }

}