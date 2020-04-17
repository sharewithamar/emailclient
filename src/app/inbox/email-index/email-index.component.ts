import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  constructor(private emailService: EmailService) {}
  emails = [];
  ngOnInit(): void {
    this.emailService.getEmails().subscribe((emails) => {
      this.emails = emails;
    });
  }
}
