import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlInputIsjIsiThreeComponent } from './intl-input-isj-isi-three.component';

describe('IntlInputIsjIsiThreeComponent', () => {
  let component: IntlInputIsjIsiThreeComponent;
  let fixture: ComponentFixture<IntlInputIsjIsiThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntlInputIsjIsiThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlInputIsjIsiThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
