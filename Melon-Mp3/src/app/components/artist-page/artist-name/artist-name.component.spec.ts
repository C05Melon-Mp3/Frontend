import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistNameComponent } from './artist-name.component';

describe('ArtistNameComponent', () => {
  let component: ArtistNameComponent;
  let fixture: ComponentFixture<ArtistNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
