import { Component } from '@angular/core';
import { USERService } from '../../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  constructor(private userService: USERService) { }
  user = this.userService

  ngOnInit() {
    this.user.loadDatabase().subscribe((res:any) => {
      this.user.userDB = res.documents;
    })
  }


  editUser(userId: any) {
    this.user.editFlag = true;
    this.user.router.navigate(['/user/userRegister'], { queryParams: { userId: userId } })
  }

  deleteUser(userId: any) {
    if (confirm("Are you sure?")) {
      this.user.deleteUser(userId).subscribe((res: any) => {
        alert(res.info)
        res.status === 201 ? this.user.loadDatabase().subscribe((res:any) => {
          this.user.userDB = res.documents;
          !this.user.userDB.length?(this.user.editFlag = false, alert("the list is Empty, please register to log in"),this.user.router.navigateByUrl('/user/userRegister')):''
        }) : ''
      })
    }
  }
}
