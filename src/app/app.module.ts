import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDataProviderModule } from 'ngx-data-provider';

import { AppComponent } from './app.component';
import { ThemeProviderComponent } from './theme-provider/theme-provider.component';
import { ThemeConsumerComponent } from './theme-consumer/theme-consumer.component';
import { ThemedButtonComponent } from './themed-button/themed-button.component';

@NgModule({
  declarations: [AppComponent, ThemeProviderComponent, ThemeConsumerComponent, ThemedButtonComponent],
  imports: [BrowserModule, NgxDataProviderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
