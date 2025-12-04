import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptentKaart } from './receptent-kaart';

describe('ReceptentKaart', () => {
  let component: ReceptentKaart;
  let fixture: ComponentFixture<ReceptentKaart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptentKaart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptentKaart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
