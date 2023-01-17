import { Component} from '@angular/core';
import { USERService } from '../../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  userId= this.route.snapshot.queryParamMap.get('userId')//if flag true?
  //userEmail= this.route.snapshot.queryParamMap.get('userEmail')//if flag true?

  constructor(private userService: USERService,private route: ActivatedRoute) { }
  user = this.userService

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  })
  ngOnInit(){
    if(this.userId){
     const index= this.user.userDB.findIndex((value:any)=>{
        return (this.userId==value._id)
     })
      this.registerForm.patchValue(this.user.userDB[index])
    }
  }
  formRegisteration(){
    if(this.registerForm.valid){
     this.user.registerValidation(this.registerForm.value).subscribe((res:any) => {
      res.status===201?(alert(res.info),this.userService.router.navigateByUrl("/user/userLogin")):alert(res.info)
    })
  }
}

  updateUser(){
    if(this.registerForm.valid){
      this.user.updateDatabase(this.registerForm.value,this.userId).subscribe((res:any)=>{
        res.status===201?alert(res.info):'';
        this.user.loadDatabase().subscribe((res:any)=>{
          this.user.userDB=res.documents;
          })
        this.user.router.navigateByUrl("/user/userList")
      })
    }
  }
}





