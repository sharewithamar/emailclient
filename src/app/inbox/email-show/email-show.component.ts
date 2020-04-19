import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id); - snapshot wont work if the view is not recrated

    this.route.params.subscribe(({ id }) => {
      this.emailService.getEmail(id).subscribe((email) => {
        console.log(email);
      });
    });
  }
}
