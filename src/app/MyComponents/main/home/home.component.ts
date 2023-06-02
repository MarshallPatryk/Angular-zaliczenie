import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Character {
  name: string;
  dateOfBirth?: string;
  alive: boolean;
  wizard: boolean;
}

@Component({
  selector: 'app-table',
  template: `
    <table mat-table [dataSource]="users">
      <!-- Definicje kolumn -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef>Name</th>
        <td mat-cell *matCellDef="let user">{{ user.name }}</td>
      </ng-container>
      <ng-container matColumnDef="age">
        <th mat-header-cell *matHeaderCellDef>Age</th>
        <td mat-cell *matCellDef="let user">{{ calculateAge(user.dateOfBirth) }}</td>
      </ng-container>
      <ng-container matColumnDef="alive">
        <th mat-header-cell *matHeaderCellDef>Alive</th>
        <td mat-cell *matCellDef="let user">{{ user.alive ? 'Yes' : 'No' }}</td>
      </ng-container>
      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef>Email</th>
        <td mat-cell *matCellDef="let user">{{ generateEmail(user.name, user.wizard) }}</td>
      </ng-container>

      <!-- Definicja wierszy i nagłówków -->
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'alive', 'email'];
  users: Character[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCharactersData();
  }

  fetchCharactersData() {
    this.http.get<Character[]>('https://hp-api.onrender.com/api/characters').subscribe(
      (response) => {
        this.users = response.slice(0, 34).map((character) => {
          return {
            name: character.name,
            dateOfBirth: character.dateOfBirth || '',
            alive: character.alive,
            wizard: character.wizard
          };
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  calculateAge(dateOfBirth: string | undefined): string {
    if (!dateOfBirth) {
      return 'Unknown';
    }

    const today = new Date();
    const [day, month, year] = dateOfBirth.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);

    const yearDiff = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      return (yearDiff - 1).toString();
    } else {
      return yearDiff.toString();
    }
  }

  generateEmail(name: string, isWizard: boolean): string {
    const [firstName, lastName] = name.split(' ');
    const domain = isWizard ? 'hogwarts.edu' : 'mugol.pl';
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    return email;
  }
}
