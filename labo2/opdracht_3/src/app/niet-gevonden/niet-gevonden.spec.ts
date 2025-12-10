import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NietGevonden } from './niet-gevonden';

describe('NietGevonden', () => {
  let component: NietGevonden;
  let fixture: ComponentFixture<NietGevonden>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NietGevonden]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NietGevonden);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
