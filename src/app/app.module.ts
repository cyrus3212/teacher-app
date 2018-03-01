import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import 'hammerjs';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [],
  entryComponents:[AddStudentDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
