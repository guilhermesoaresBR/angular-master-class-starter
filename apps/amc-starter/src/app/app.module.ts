import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';

import { ContactsAppComponent } from './app.component';
import { ContactsNgRxModule } from './contacts-ngrx.module';

@NgModule({
  declarations: [ContactsAppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    ContactsNgRxModule,
    FlexLayoutModule
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {}
