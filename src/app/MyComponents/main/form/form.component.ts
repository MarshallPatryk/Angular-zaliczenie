import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]]
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      alert('Form submitted!');
      alert(JSON.stringify(this.myForm.value));
    } else {
      alert('Invalid form!');
    }
  }
}
