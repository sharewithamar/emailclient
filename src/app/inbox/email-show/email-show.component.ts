import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs/operators';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email: Email;
  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {
    //just for safe check initial assign
    this.email = this.route.snapshot.data.email;
    //Note : Resolver reruns when the route data changes
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id); - snapshot wont work if the view is not recreated
    //using resolver will be a better alternative than receiving undefined
    /*   this.route.params
      .pipe(
        switchMap(({ id }) => {
          return this.emailService.getEmail(id);
        })
      )
      .subscribe((email) => {
        this.email = email;
      }); */
  }
}
