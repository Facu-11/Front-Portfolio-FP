import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //  var nav = document.querySelector('#nav');

  // window.addEventListener('scroll', function () {
  //   if (window.pageYOffset > 100) {
  //     nav.classList.add('bg-dark', 'shadow');
  //   } else {
  //     nav.classList.remove('bg-dark', 'shadow');
  //   }
  // });

}
