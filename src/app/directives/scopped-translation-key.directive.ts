import {
    Directive,
    forwardRef, Host, Injectable, Input, Optional, SkipSelf
} from '@angular/core';

@Injectable()
@Directive({
  selector: '[scoppedTranslationKey]',
  providers: [
    {
      provide: ScoppedTranslationKeyDirective,
      useExisting: forwardRef(() => ScoppedTranslationKeyDirective),
    },
  ],
})
export class ScoppedTranslationKeyDirective {
  @Input("scoppedTranslationKey")
  public scoppedTranslationkey!: string;

  public get key(): string {
    if (this.parent) {
      return `${this.parent.key}.${this.scoppedTranslationkey}`;
    }

    return this.scoppedTranslationkey;
  }

  constructor(
    @Optional() @Host() @SkipSelf() private parent?: ScoppedTranslationKeyDirective
  ) {}
}
