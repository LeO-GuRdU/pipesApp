import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//Módulos perzonalizados
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localEs from '@angular/common/locales/es-AR';
import localBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localEs );
registerLocaleData( localBr );
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule,
  ],
  exports: [
    PrimeNgModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
