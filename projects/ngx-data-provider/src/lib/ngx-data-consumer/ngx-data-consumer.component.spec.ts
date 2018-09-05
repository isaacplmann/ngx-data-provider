import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDataConsumerComponent } from './ngx-data-consumer.component';

describe('NgxDataConsumerComponent', () => {
  let component: NgxDataConsumerComponent;
  let fixture: ComponentFixture<NgxDataConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDataConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDataConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
