import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()
  @Output() isUserLoggedIn: EventEmitter<any> = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit() {
  }

  openSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300)
  }

  signOut() {
    debugger
    this.route.navigate([''])
    let jay = false;
    this.isUserLoggedIn.emit(jay);
  }
}
