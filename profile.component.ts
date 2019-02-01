import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  check:boolean=true;
  constructor (){
  this.user={name:'Chippy sabu',job:'SE',address:'abc',phone:['1236547890','7894561230']};
}
  togglecheck(){
this.check=!this.check; 
  }
  ngOnInit() {
  }

}
