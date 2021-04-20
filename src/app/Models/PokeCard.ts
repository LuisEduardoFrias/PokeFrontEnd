import { Ability } from './Ability';
import { Move } from './Move';
import { Type } from './Type';

export class PokeCard{
    Name: String;
    UrlImage: String;
    Base_experience:number;
    Height: number;
    Weight: number;
    Type: Type[];
    Abilities: Ability[];
    Moves: Move[];

    constructor(
    name: String,
    urlImage: String,
    base_experience:number,
    height: number,
    weight: number,
    type: Type[],
    abilities: Ability[],
    moves: Move[]) {
        
        this.Name = name;
        this.UrlImage = urlImage;
        this.Base_experience = base_experience;
        this.Height = height;
        this.Weight = weight;
        this.Type = type;
        this.Abilities = abilities;
        this.Moves = moves;
    }

}