import { Component, Input } from '@angular/core';
import { CommonBindingServiceService } from './modules/shared/services/common-binding-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Watson-Visual-Recognition';
  displayLogo;
  dashboardURL;

  constructor(
    private commonService: CommonBindingServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.dashboardURL = this.router.url
    // if () {
    //   this.commonService.displayHeader = false;
    //   debugger
    // }
  }
}
