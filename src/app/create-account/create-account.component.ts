import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().subscribe(
      (res: any) =>{
        if(res.succeeded){
          this.service.formModel.reset();
        }
        else{
          res.errors.forEach(element => {
            switch(element.code){
              case 'DuplicateUserName':
                //Username is already taken
                break;
              
              default:
                //Registration failed
                break;
            }
          });
          
        }},
      err=>{console.log(err)}
    );
  }

}
