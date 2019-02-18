import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';


import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { HomePage } from './home.page';

const routes = [
  { path: '', component: HomePage }
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
    // HttpClientModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
