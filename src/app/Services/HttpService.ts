import { HttpClient } from "@angular/common/http";
import { PaginationPokemon } from "../Models/PaginationPokemon";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class HttpService{

    constructor(private http: HttpClient) { }
    
    private ApiPath = environment.ApiPath;      

    GetNetApi(url:string) : Observable<any> {
        return this.http.get<any>(this.ApiPath + url);
    }

    GetPokeApi(url:string) : Observable<any> {
       return this.http.get<any>("https://pokeapi.co/api/v2/pokemon/" + url)
    }
}