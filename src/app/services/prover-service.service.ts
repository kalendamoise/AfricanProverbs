import { Injectable } from '@angular/core';
import { PROVERBS } from './mock-proverbs';

@Injectable()
export class ProverServiceService {

  constructor() { }

  getProvers(){
    return PROVERBS;
  }

}
