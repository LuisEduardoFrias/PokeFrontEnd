import { Results} from './Results';

export class PaginationPokemon{
    count: number;
    next: string;
    previeus: string;
    results: Results[];

    constructor(
    count: number,
    next: string,
    previeus: string,
    results: Results[]) {
        this.count = count;
        this.next = next;
        this.previeus = previeus;
        this.results = results;
    }
}