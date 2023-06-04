import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as $ from 'jquery';
import {} from 'ngx-mat-intl-tel-input';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { MatIconRegistry } from '@angular/material/icon';
import { ProviderServicesService } from 'src/provider-services.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxIntlTelInputModule,
    Ng2TelInputModule,

    AppRoutingModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    CommonModule,
    SharedModule,
    BrowserModule,
  ],
  providers: [ProviderServicesService],
  bootstrap: [AppComponent],
  exports: [CommonModule],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // See: https://material.angular.io/components/icon/overview#svg-icons.
    iconRegistry.addSvgIcon(
      'angular',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/angular.svsg')
    );
  }
}
