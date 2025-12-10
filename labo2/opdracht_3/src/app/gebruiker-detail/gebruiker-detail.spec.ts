import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerDetail } from './gebruiker-detail';

describe('GebruikerDetail', () => {
  let component: GebruikerDetail;
  let fixture: ComponentFixture<GebruikerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GebruikerDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GebruikerDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
