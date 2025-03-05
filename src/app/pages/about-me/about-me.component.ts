import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
