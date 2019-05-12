import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ClockPipe } from './clock.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CountdownComponent,
    ClockPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
