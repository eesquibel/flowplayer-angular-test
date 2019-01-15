import { Component } from '@angular/core';
import { FlowplayerConfig } from './flowplayer-video/flowplayer-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'flowplayer-test';

  video: FlowplayerConfig = {
    clip: {
      sources: [{
          type: 'application/x-mpegurl',
          src: 'http://www.streambox.fr/playlists/test_001/stream.m3u8'
        }
      ]
    }
  };
}
