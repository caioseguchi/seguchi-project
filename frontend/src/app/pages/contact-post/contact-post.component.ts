import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../services/contact.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-contact-post',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-post.component.html',
  styleUrl: './contact-post.component.scss',
})
export class ContactPostComponent implements OnInit {
  contactPostForm!: FormGroup;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactPostForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }

  contactPost() {
    console.log(this.contactPostForm.value);
    this.contactService
      .postContact(this.contactPostForm.value)
      .subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/contacts');
      });
  }
}
