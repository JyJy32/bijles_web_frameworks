import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptentLijst } from './receptent-lijst';

describe('ReceptentLijst', () => {
  let component: ReceptentLijst;
  let fixture: ComponentFixture<ReceptentLijst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptentLijst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptentLijst);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
