import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakPageComponent } from './weak-page.component';

describe('WeakPageComponent', () => {
  let component: WeakPageComponent;
  let fixture: ComponentFixture<WeakPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeakPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeakPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
