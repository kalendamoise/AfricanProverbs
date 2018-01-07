import { Component, OnInit, Input } from '@angular/core';
import { Proverb } from "./../classes/proverb";

@Component({
  selector: 'app-proverb',
  templateUrl: './proverb.component.html',
  styleUrls: ['./proverb.component.css']
})
export class ProverbComponent implements OnInit {
  @Input() proverb: Proverb;

  constructor() { }
  ngOnInit() { }

}
