import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveInterfComponent } from './eleve-interf.component';

describe('EleveInterfComponent', () => {
  let component: EleveInterfComponent;
  let fixture: ComponentFixture<EleveInterfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EleveInterfComponent]
    });
    fixture = TestBed.createComponent(EleveInterfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
