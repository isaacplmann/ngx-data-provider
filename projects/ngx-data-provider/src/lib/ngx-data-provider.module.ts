import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxDataConsumerComponent } from './ngx-data-consumer/ngx-data-consumer.component';
import { NgxDataProviderDirective } from './ngx-data-provider.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxDataProviderDirective, NgxDataConsumerComponent],
  exports: [NgxDataProviderDirective, NgxDataConsumerComponent]
})
export class NgxDataProviderModule {}
