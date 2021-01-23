import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsComplementairesComponent } from './informations-complementaires.component';

describe('InformationsComplementairesComponent', () => {
  let component: InformationsComplementairesComponent;
  let fixture: ComponentFixture<InformationsComplementairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsComplementairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsComplementairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
