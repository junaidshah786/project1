import { Component, OnInit } from '@angular/core';
import { USERService } from '../../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {

  constructor(private userService: USERService) { }
  user = this.userService

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  login() {
    if (!this.loginForm.invalid) {
      this.user.authUser(this.loginForm.value).subscribe((res: any) => {
       res.status===201?(alert(res.info),this.userService.router.navigateByUrl("/user/userList")):alert(res.info)
      })
      //isAuthenticated?(alert("user logged in Successufully"),this.userService.router.navigateByUrl("/userlistComponent")):alert('incorrect username/password')
    }

  }

}








