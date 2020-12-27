import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   
 }

  
  goToHome(){
    this.router.navigate([""])
  }
  goToForm(){
    this.router.navigate(["form"])
  }

   goToEvents(){
    this.router.navigate(["announce"])
  }

  goToReservation(){
    this.router.navigate(["reservation"])
  }

  goToMenu(){
    this.router.navigate(["menu"])
  }

  goToStaff(){
    this.router.navigate(["staff"])
  }

  goToContact(){
    this.router.navigate(["contact"])
  }
}
