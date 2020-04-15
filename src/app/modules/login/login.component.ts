import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() isUserLoggedIn: EventEmitter<any> = new EventEmitter();
  isloggedIn = false;
  errorMessage = "invalid login";
  username: string;
  password: string;
  invalidLogin: boolean;

  constructor() { }

  ngOnInit() {
    this.isloggedIn = false;
  }


  logIN() {
    debugger
    if (this.username == 'test' && this.password == 'test') {
      this.isloggedIn = true;
      console.log(this.isloggedIn);
      this.isUserLoggedIn.emit(this.isloggedIn);
      console.log(this.isUserLoggedIn.emit(this.isloggedIn));
    }
    this.invalidLogin = true;
    this.errorMessage
  }

}
