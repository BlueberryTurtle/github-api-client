import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, UserCardComponent, SearchBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
