import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FlowplayerConfig } from './flowplayer-config';

const flowplayer: any = window['flowplayer'];

@Component({
  selector: 'flowplayer-video',
  templateUrl: './flowplayer-video.component.html',
  styleUrls: ['./flowplayer-video.component.less']
})
export class FlowplayerVideoComponent implements OnInit, AfterViewInit {

  @Input()
  public Config: FlowplayerConfig;

  @ViewChild('flowplayer')
  public Div: ElementRef<HTMLDivElement>;

  constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    console.log(this.Config);
    flowplayer(this.Div.nativeElement, this.Config);
  }

}
