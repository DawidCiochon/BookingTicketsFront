import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+=]+@[a-z0-9.-]+\.[a-z]{2-4}$';
  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe((data: any) => {
      if (data.succeeded === true){
        this.service.formModel.reset();
        this.toastr.success('User registration successful');
      }
      else
        {this.toastr.error('Registration failed'); }
    });
  }
}
