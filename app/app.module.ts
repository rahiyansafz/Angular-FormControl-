import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ FormsModule, ReactiveFormsModule,BrowserModule,CheckBoxModule],  providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
