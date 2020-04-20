import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  email: Email;
  showModal = false;
  constructor() {
    this.email = {
      id: '',
      to: '',
      from: 'test@angular.com',
      subject: '',
      text: '',
      html: '',
    };
  }

  ngOnInit(): void {}
}
