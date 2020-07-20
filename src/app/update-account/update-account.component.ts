import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, public service: UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if(id !== '0'){
      this.getUser(id);
    }
  }

  getUser(id: string){
    this.service.getUser(id)
      .subscribe((user: User) => {
        this.user = user;
      },
      (err: any) => console.log(err));
  }

  onSubmit(){
    if(this.user.id){
      this.service.updateUser(this.user)
        .subscribe((user: User) => {
          if(user){
            this.router.navigate(['/home']);
          }
          else{
            this.errorMessage = 'Unable to save user';
          }
        },
        (err: any) => console.log(err));
    }
    else{
      this.service.insertUser(this.user)
        .subscribe((user: User) => {
          if(user){
            this.router.navigate(['/home']);
          }
          else{
            this.errorMessage = 'Unable to add user';
          }
        },
        (err: any) => console.log(err));
    }
  }

}
