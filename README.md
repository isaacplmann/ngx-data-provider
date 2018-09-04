# ngx-data-provider

Use the data provider component pattern in Angular.

## Simple Example

```html
<ngx-data-provider key="theme" [data]="{ theme: 'dark' }">
  ...
    ...
      <ngx-data-consumer key="theme">
        <ng-template let-theme="theme">
          {{theme}} <-- 'dark'
        </ng-template>
      </ngx-data-consumer>
    ...
  ...
</ngx-data-provider>
```

## Getting Started

1. `npm install ngx-data-provider`
2. Import the `DataProviderModule.forRoot()` in your root module.
3. Create an `<ngx-data-provider>` with some `key` and `data`
4. Consume that `data` anywhere in the content of the `<ngx-data-provider>` with an `<ngx-data-consumer>` using the same `key`.

- The `<ng-template>` inside of `<ngx-data-consumer>` can reference any properties provided in the `data`.

## Custom providers

You may want to make your own custom providers that directly handle your own data.

```ts
@Component({
  selector: 'theme-provider',
  template: `
  <ngx-data-provider key="theme" [data]="{ theme: 'dark' }">
    <ng-content></ng-content>
  </ngx-data-provider>
  `,
})
export class ThemeProviderComponent {}

@Component({
  selector: 'theme-consumer',
  template: `
  <ngx-data-consumer key="theme">
    <ng-content></ng-content>
  </ngx-data-consumer>
  `,
})
```

Usage:

```html
<theme-provider>
  ...
    ...
      <theme-consumer>
        <ng-template let-theme="theme">
          {{theme}} <-- 'dark'
        </ng-template>
      </theme-consumer>
    ...
  ...
</theme-provider>
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Kent C. Dodds](https://twitter.com/kentcdodds) suggested I make this little library to make a code snippet for our [Framework Summit](http://frameworksummit.com) talk more concise. [Conference Driven Development](https://twitter.com/NikkitaFTW/status/973258530777165824) in action!
