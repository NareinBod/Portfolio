import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  symbol: string = '🌞';

  onClick() {
    if (document.body.style.backgroundColor === '#0a192f') {
      this.symbol = '🌙';
      document.body.style.backgroundColor = 'white';
    } else if (document.body.style.backgroundColor === 'white') {
      this.symbol = '🌞';
      document.body.style.backgroundColor = '#0a192f';
    }
  }
}
