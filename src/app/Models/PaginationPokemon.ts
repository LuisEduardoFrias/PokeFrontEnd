import { Results} from './Results';

export class PaginationPokemon{
    Count: number;
    Next: string;
    Previeus: string;
    results: Results[];

    constructor(
    count: number,
    next: string,
    previeus: string,
    results: Results[]) {
        this.Count = count;
        this.Next = next;
        this.Previeus = previeus;
        this.results = results;
    }
}