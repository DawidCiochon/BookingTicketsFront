import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flag = false;
  formModel = {
    Email: '',
    Password: ''
  };

  constructor(public service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.service.login(form.value).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/home');
        this.flag = true;
      },
      (err: any)  => {
          {console.log(err);
           this.flag = false; }
      }
    );
  }
}
