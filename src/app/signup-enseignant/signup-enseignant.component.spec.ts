import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEnseignantComponent } from './signup-enseignant.component';

describe('SignupEnseignantComponent', () => {
  let component: SignupEnseignantComponent;
  let fixture: ComponentFixture<SignupEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupEnseignantComponent]
    });
    fixture = TestBed.createComponent(SignupEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
