//import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { __param } from 'tslib';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class USERService {
  constructor(public router: Router,private _http:HttpClient) { }

  userDB: any = [];
  editFlag: boolean = false;
  newObj: any;
  serverUrl=environment.serverUrl

  reset() {
    this.editFlag = false;
  }

  authUser(loginObj: any) {
    return this._http.post(`${this.serverUrl}userLogin`,loginObj)
  }

  registerValidation(registerObj: any) {
      return this._http.post(`${this.serverUrl}userRegister`,registerObj)
    }

  loadDatabase(){
    return this._http.get(`${this.serverUrl}userList`)
  }


  updateDatabase(registerObj:any,userId:any){
    return this._http.put(`${this.serverUrl}userUpdate`+'?'+new URLSearchParams({userId:userId}),registerObj)
  }

  deleteUser(userId:any){
    return this._http.delete(`${this.serverUrl}deleteUser`+'?'+new URLSearchParams({userId:userId}))
  }
}




// editUser(index: number) {
//   this.editFlag = true;
//   this.router.navigate(['/userRegister'], { queryParams: { userId: index } })
// }











//All the AJAX calls in Angular are using rxjs internally and in order to use any of them, you've got to use the method name, e.g get, and then call subscribe on it, because get returns and Observable.
 // authUser(loginObj: any) {
  //   return this._http.post("http://localhost:3000/userLogin",loginObj)
  //   return this.userDB.some((user: any) => {
  //     return (loginObj.value.email == user.email && loginObj.value.password == user.password)
  //   })
  // }



  // registerValidation(registerObj: any) {
  //   if (this.userDB.length) {
  //     return this.userDB.some((valuee: any) => {
  //       return registerObj.value.email == valuee.email;
  //     })
  //   }
  //   return false;
  // }

  //this.userDB=Object.entries(this.userDB)
    // console.log(this.userDB)
    // console.log(typeof(this.userDB))



    //task 1 edit user loadingdata
