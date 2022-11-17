import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  pos:boolean=false;
  tokenService: any;

  constructor(private router: Router ) { }

  // logingo (){
  //   this.router.navigate(['/login']);
  // }


  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }


  

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
