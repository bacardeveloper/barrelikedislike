import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'barrelikedislike';

  tailleChiffre = 0;
  tailleShare = this.tailleChiffre.toString() + 'px';
  incre = 3.5;

  pushWidth() {
    if (this.tailleChiffre < 350) {
      this.tailleChiffre = this.tailleChiffre + this.incre;
      console.log('augmenter : ' + this.tailleChiffre);
      return (this.tailleShare = this.tailleChiffre.toString() + 'px');
    } else {
      console.log('augmenter : ' + this.tailleChiffre);
      return this.tailleShare;
    }
  }

  popWidth() {
    if (this.tailleChiffre > 0) {
      this.tailleChiffre = this.tailleChiffre - this.incre;
      console.log('diminue : ' + this.tailleChiffre);
      return (this.tailleShare = this.tailleChiffre.toString() + 'px');
    } else {
      console.log('diminue : ' + this.tailleChiffre);
      return this.tailleShare;
    }
  }
}
