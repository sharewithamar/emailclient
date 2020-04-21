import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from '../email';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  @Input() email: Email;
  @Output() emailSubmit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // console.log(this.email);
    const { subject, from, to, text } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      subject: new FormControl(subject, [Validators.required]),
      from: new FormControl({ value: from, disabled: true }), //alternate way of setting a field disabled
      text: new FormControl(text, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    //Note : disabled field wont come in value
    //To get disabled value as well form use getRawValue()
    // console.log(this.emailForm.getRawValue());

    this.emailSubmit.emit(this.emailForm.value);
  }
}
