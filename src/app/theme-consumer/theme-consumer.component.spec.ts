import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeConsumerComponent } from './theme-consumer.component';

describe('ThemeConsumerComponent', () => {
  let component: ThemeConsumerComponent;
  let fixture: ComponentFixture<ThemeConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
