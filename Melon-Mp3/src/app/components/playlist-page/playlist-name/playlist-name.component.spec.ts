import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistNameComponent } from './playlist-name.component';

describe('PlaylistNameComponent', () => {
  let component: PlaylistNameComponent;
  let fixture: ComponentFixture<PlaylistNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
