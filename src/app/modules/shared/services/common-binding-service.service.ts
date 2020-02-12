import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonBindingServiceService {
  public displayHeader = true;
  constructor(
    private translateService: TranslateService,
    private restApiService: RestApiService
  ) { }

  getLabel(string) {
    let select;
    this.translateService.get(string).subscribe(translatedValue => {
      select = translatedValue;
    });
    return select;
  }

  getPostmanData(): Observable<any> {
    return this.restApiService.get('https://dda92964-fa4e-41da-bbed-4d808bfb7408.mock.pstmn.io/signin', 'page-center');
  }

  addUser(data): Observable<any> {
    return this.restApiService.post('https://dda92964-fa4e-41da-bbed-4d808bfb7408.mock.pstmn.io/login', data, 'page-center');
  }

}
