import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePersComponent } from './choose-pers.component';

describe('ChoosePersComponent', () => {
  let component: ChoosePersComponent;
  let fixture: ComponentFixture<ChoosePersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosePersComponent]
    });
    fixture = TestBed.createComponent(ChoosePersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
