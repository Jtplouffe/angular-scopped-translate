import {
    ChangeDetectorRef, OnDestroy,
    Optional,
    Pipe,
    PipeTransform
} from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ScoppedTranslationKeyDirective } from '../directives/scopped-translation-key.directive';

@Pipe({
  name: 'scoppedTranslate',
  pure: false,
})
export class ScoppedTranslatePipe
  extends TranslatePipe
  implements PipeTransform, OnDestroy
{
  constructor(
    @Optional() private scoppedTranslationKey: ScoppedTranslationKeyDirective,
    translate: TranslateService,
    _ref: ChangeDetectorRef
  ) {
    super(translate, _ref);
  }

  public override transform(query: string, ...args: any[]): string {
    if (this.scoppedTranslationKey) {
      return super.transform(
        `${this.scoppedTranslationKey.key}.${query}`,
        ...args
      );
    }

    return super.transform(query, ...args);
  }
}
