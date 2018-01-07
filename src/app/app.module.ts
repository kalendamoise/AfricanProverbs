import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProverbComponent } from './proverb/proverb.component';
import { ProverServiceService } from './services/prover-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ProverbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProverServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
