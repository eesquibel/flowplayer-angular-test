import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowplayerVideoComponent } from './flowplayer-video.component';

describe('FlowplayerVideoComponent', () => {
  let component: FlowplayerVideoComponent;
  let fixture: ComponentFixture<FlowplayerVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowplayerVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowplayerVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
