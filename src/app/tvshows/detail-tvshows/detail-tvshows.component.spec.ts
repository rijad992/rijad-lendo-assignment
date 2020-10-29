import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTvshowsComponent } from './detail-tvshows.component';

describe('DetailTvshowsComponent', () => {
  let component: DetailTvshowsComponent;
  let fixture: ComponentFixture<DetailTvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTvshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
