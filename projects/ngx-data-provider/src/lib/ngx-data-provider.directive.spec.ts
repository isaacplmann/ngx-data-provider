import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDataProviderDirective } from './ngx-data-provider.directive';

describe('NgxDataProviderDirective', () => {
  let component: NgxDataProviderDirective;
  let fixture: ComponentFixture<NgxDataProviderDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDataProviderDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDataProviderDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
