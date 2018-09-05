import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'theme-consumer',
  templateUrl: './theme-consumer.component.html',
  styleUrls: ['./theme-consumer.component.css']
})
export class ThemeConsumerComponent implements OnInit {
  @Input()
  @ContentChild(TemplateRef)
  renderTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
