import { Component } from '@angular/core';

@Component({
  selector: 'theme-provider',
  templateUrl: './theme-provider.component.html',
  styleUrls: ['./theme-provider.component.css']
})
export class ThemeProviderComponent {
  theme = 'dark';
  setTheme = theme => (this.theme = theme);
}
