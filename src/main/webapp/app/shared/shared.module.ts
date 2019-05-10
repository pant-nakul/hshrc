import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HshrcSharedLibsModule, HshrcSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [HshrcSharedLibsModule, HshrcSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HshrcSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HshrcSharedModule {
  static forRoot() {
    return {
      ngModule: HshrcSharedModule
    };
  }
}
