import { Component } from '@angular/core';
import { Proverb } from './classes/proverb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'African Proverbs';
  proverb: Proverb;
  proverbs: Proverb[] = [];

  ngOnInit() {
    this.proverb = new Proverb();
    this.proverb.category = ['Wisdom'];
    this.proverb.originalText = " Wisdom is like a baobab tree; no one individual can embrace it.";
    this.proverb.englishTranslation = " Wisdom is like a baobab tree; no one individual can embrace it."
    this.proverb.origin = "Akan";

    this.proverbs.push(this.proverb);
    this.proverbs.push(this.proverb);
    this.proverbs.push(this.proverb);
    this.proverbs.push(this.proverb);

  }
}
