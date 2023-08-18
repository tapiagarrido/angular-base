import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { MainComponent } from './pages/main-page.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    ListComponent,
    MainComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainComponent
  ]
})
export class DbzModule { }
