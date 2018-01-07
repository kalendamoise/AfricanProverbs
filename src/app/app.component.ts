import { Component } from '@angular/core';
import { Proverb } from './classes/proverb';
import { ProverServiceService } from './services/prover-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'African Proverbs';
  proverb: Proverb;
  proverbs: Proverb[] = [];

  constructor(private proverbService: ProverServiceService){

  }

  ngOnInit() {
    this.proverbs = this.proverbService.getProvers();
  }
}
