import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-update.component.html',
  styleUrl: './contact-update.component.scss',
})
export class ContactUpdateComponent {
  updateContactForm!: FormGroup;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ContactService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateContactForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getContactById();
  }

  getContactById() {
    this.service.getContactById(this.id).subscribe((res) => {
      console.log(res);
      this.updateContactForm.patchValue(res);
    });
  }

  updateContact() {
    this.service
      .updateContactById(this.id, this.updateContactForm.value)
      .subscribe((res) => {
        console.log(res);
        if (res.id != null) {
          this.router.navigateByUrl('/contacts');
        }
      });
  }
}
