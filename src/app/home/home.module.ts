import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { HomePage } from './home.page';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchResultDetailsComponent } from '../search-result-details/search-result-details.component';

const routes = [
  { path: '', component: HomePage },
  { path: 'details/:id', component: HomePage },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage, SearchResultsComponent, SearchResultDetailsComponent]
})
export class HomePageModule { }
