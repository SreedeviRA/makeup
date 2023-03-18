import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeshadowComponent } from './eyeshadow.component';

describe('EyeshadowComponent', () => {
  let component: EyeshadowComponent;
  let fixture: ComponentFixture<EyeshadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyeshadowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeshadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
