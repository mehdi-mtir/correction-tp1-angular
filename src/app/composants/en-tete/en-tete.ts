import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-en-tete',
  styleUrl: './en-tete.css',
  templateUrl: './en-tete.html',
})
export class EnTete {
  urlLogo1: string = "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=thumbnail";
  urlLogo2 = "https://img.icons8.com/color/1200/angularjs.jpg";
  urlLogo: string = this.urlLogo1;
  titre: string = 'Application de gestion des cours';

  changerLogo() {
    this.urlLogo = this.urlLogo === this.urlLogo1 ? this.urlLogo2 : this.urlLogo1;
  }
}
