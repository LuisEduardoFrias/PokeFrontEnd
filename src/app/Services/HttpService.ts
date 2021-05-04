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

    GetNetApi(starting:number) : Observable<any> {
        if(starting === null)
            return this.http.get<any>(this.ApiPath + "api/pokemon");
        else
            return this.http.get<any>(this.ApiPath + "api/pokemon/" + starting);
    }

    
    GetApiPkeDetails(id:string) : Observable<any> {
        return this.http.get<any>(this.ApiPath + "api/pokedetails/" + id);
    }


}