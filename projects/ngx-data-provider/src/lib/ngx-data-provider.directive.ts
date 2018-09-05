import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

import { NgxDataProviderService } from './ngx-data-provider.service';

@Directive({
  selector: 'ngx-data-provider, [ngxDataProvider]'
})
export class NgxDataProviderDirective implements OnChanges {
  @Input()
  key: string;
  @Input()
  data: any;

  constructor(private providerService: NgxDataProviderService) {}

  ngOnChanges(changes: SimpleChanges) {
    const { key, data } = changes;
    if (key || data) {
      if (this.key && this.data) {
        setTimeout(() => this.providerService.setProvider(this.key, this.data));
      }
    }
  }
}
