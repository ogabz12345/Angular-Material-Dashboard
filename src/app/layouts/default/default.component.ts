import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  view : number;

  constructor() { }

  ngOnInit() {
    debugger
    this.view = 0;
  }

  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen
  }

  checkIfLoggedIn(boo){
    console.log(boo)
    if(boo == true){
      this.view = 1;
    } else{
      this.view = 0;
    }
  }


}
