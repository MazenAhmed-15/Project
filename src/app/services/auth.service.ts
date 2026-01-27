import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  register(RegisterForm:User){
    const usersArray = localStorage.getItem('userArray');
    if (!usersArray){
      localStorage.setItem('usersArray',JSON.stringify([RegisterForm]))
    }else if (usersArray){
      const array = JSON.parse(usersArray);
      array.push(RegisterForm);
      localStorage.setItem('usersArray',JSON.stringify([RegisterForm]));
    }
  }
  
    Login(RegisterForm:User):Boolean{
    const usersArray = localStorage.getItem('userArray');
    if (!usersArray){
      localStorage.setItem('usersArray',JSON.stringify([RegisterForm]))
    }else if (usersArray){
      const array = JSON.parse(usersArray);
     const{email}= RegisterForm;
     const checkUser = array.find((user:User)=> user.email === email);
     if (checkUser){
      return true;
     }
    }
         return false;
  }
}
