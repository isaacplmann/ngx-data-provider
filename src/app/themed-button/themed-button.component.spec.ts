import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemedButtonComponent } from './themed-button.component';

describe('ThemedButtonComponent', () => {
  let component: ThemedButtonComponent;
  let fixture: ComponentFixture<ThemedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
