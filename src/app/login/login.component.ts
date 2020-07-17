import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  formModel = {
    Email: '',
    Password: ''
  };

  constructor(private formBuilder: FormBuilder, public service: UserService, private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) { 
      if (this.service.currentUserValue) { 
        this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    /*this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });*/
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit(form: NgForm){
    this.submitted = true;

    /*if (this.loginForm.invalid){
      return;
    }*/

    this.loading = true;

    this.service.login(form.value).pipe(first())
      .subscribe(
        data => {
          this.router.navigateByUrl('/home');
      },
      error  => {
          this.error = error;
          this.loading = false;
        }
    );
  }
}
