import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListComponent } from './MyComponents/main/characters/characters.component';
import { FormComponent } from './MyComponents/main/form/form.component';
import { HomeComponent } from './MyComponents/main/home/home.component';
import { RodzicComponent } from './MyComponents/main/rodzic/rodzic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'parent', component: RodzicComponent },
 // { path: 'home', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
