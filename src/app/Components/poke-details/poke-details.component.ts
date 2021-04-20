import { Component, OnInit } from '@angular/core';
import { PokeCard } from 'src/app/Models/PokeCard';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {

  constructor() { }

  PokeCards: PokeCard;

  ngOnInit(): void {
  }

}
