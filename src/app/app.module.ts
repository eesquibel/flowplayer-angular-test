import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlowplayerVideoComponent } from './flowplayer-video/flowplayer-video.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowplayerVideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
