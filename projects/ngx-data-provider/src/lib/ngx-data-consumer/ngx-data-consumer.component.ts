import { Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

import { NgxDataProviderService } from '../ngx-data-provider.service';

@Component({
  selector: 'ngx-data-consumer',
  template: `
  <ng-container *ngTemplateOutlet="renderTemplate;
    context: data$ | async">
  </ng-container>
  `
})
export class NgxDataConsumerComponent implements OnChanges {
  @Input()
  key: string;

  @Input()
  @ContentChild(TemplateRef)
  renderTemplate: TemplateRef<any>;

  data$: Observable<any>;

  constructor(private providerService: NgxDataProviderService) {}

  ngOnChanges(changes: SimpleChanges) {
    const { key } = changes;
    if (key) {
      this.data$ = this.providerService.providers[this.key];
      if (!this.data$) {
        const timer = setInterval(() => {
          this.data$ = this.providerService.providers[this.key];
          if (this.data$) {
            clearInterval(timer);
          }
        });
      }
    }
  }
}
