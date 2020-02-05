import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from './modules/shared/shared.module';
import { LoginComponent } from './pages/login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SwapTranslateService } from './modules/shared/services/swap-translate.service';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: SwapTranslateService
      },
    }),
    SharedModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
