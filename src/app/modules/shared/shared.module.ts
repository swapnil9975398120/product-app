import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateService } from '@ngx-translate/core';
import { SwapTranslateService } from './services/swap-translate.service';
import { MissingSwapTranslateService } from './services/missing-swap-translate.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: SwapTranslateService
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingSwapTranslateService
      }
    }),

  ],
  exports: [
    TranslateModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [    
        TranslateService,
        SwapTranslateService
      ]
    };
  }

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

  }

 }
