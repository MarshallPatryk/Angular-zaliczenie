import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-list',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.http.get<any[]>('https://hp-api.onrender.com/api/characters')
      .subscribe(response => {
        this.characters = response;
      });
  }
}