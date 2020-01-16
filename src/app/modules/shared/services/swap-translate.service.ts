import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SwapTranslateService implements TranslateLoader{

  getTranslation(lang: string): Observable<any> {
    return of({
      Username: 'Email',
      Password: 'Password',
      error_password_required: 'Password is required.',
      email_required: ' E-mail is required.',
      exceed_max_length: 'Max length is exceed.',
      label_sign_in: 'Sign In'
    });
  }

}
