import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { LoaderService } from '../components/loader/loader.service';
import { Observable, throwError } from 'rxjs';
// import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient,
    private zone: NgZone, private router: Router,
    private loaderService: LoaderService) { }



  get(url: string, loader?: string): Observable<{}> {
    this.showLoader(loader);
    return this.http.get(url).pipe(
      map((r: Response) => {
        this.hideLoader();
        return r;
      })
    );
  }

  post(url: string, body: any, loader?: string, options = { headers: this.getHeaders() }): Observable<{}> {
    this.showLoader(loader);
    return this.http.post(url, body, options).pipe(
      map((r: Response) => {
        this.hideLoader();
        return r;
      })
    );
  }


  private showLoader(loader?: string): void {
    if (loader !== undefined && loader !== null && 'none' !== loader.toLowerCase()) {
      this.loaderService.show(loader);
    }
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }


  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Accept-Language': 'en',
      // 'Content-Type': AppSettings.HEADER_CONTENT_TYPE,
      // 'Accept': AppSettings.HEADER_CONTENT_TYPE
    });
    // const todayDate = new Date().toString();
    // AppSettings.HEADER_TIMEZONE_VALUE = todayDate.substr(todayDate.search(AppSettings.TIME_ZONE_FIRST_STRING),
    //   todayDate.search(AppSettings.TIME_ZONE_SECOND_STRING)).replace('(', '').replace(')', '');
    // if (AppSettings.HEADER_AUTHORIZATION_VALUE !== null) {
    //   headers = new HttpHeaders({
    //     'Accept-Language': AppSettings.HEADER_ACCEPT_LANGUAGE,
    //     'Content-Type': AppSettings.HEADER_CONTENT_TYPE,
    //     'Accept': AppSettings.HEADER_CONTENT_TYPE,
    //     'Authorization': 'Bearer ' + this.storageService.getItem(AppSettings.TOKEN_KEY),
    //     'Timezone': AppSettings.HEADER_TIMEZONE_VALUE
    //   });
    // }
    return headers;
  }

  private handleError(error: HttpErrorResponse | any) {
    this.hideLoader();
    // if (error.status === 400) {
    //   return throwError(error.error);
    // } else if (error.status === 500 || error.status === 403) {
    //   return throwError(error);
    // } else if (error.status === 401) {
    //   this.router.navigate(['/signin']);
    // }
    // TODO handle 401 and other errors;
  }



}
