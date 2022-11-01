import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pos:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  found(e:any): void {
    let popUser:number=window.pageYOffset;
    console.log(window.pageYOffset);
    
    if(popUser>300){
      this.pos=true;
    }
    else if(popUser == 0){
      this.pos=false
    }
  }

}
