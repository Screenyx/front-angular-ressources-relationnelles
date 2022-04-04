import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  private x:boolean = false;
  // private menuContainer:any = document.getElementById("menu-container");

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {



  }
  openMenu() {
    let menuContainer = document.getElementById("menu-container");
    let menuBurger = document.getElementById("menu-burger");

    // @ts-ignore
    menuContainer.style.display="flex";
    // @ts-ignore
    menuBurger.style.display="none";

  }


  closeMenu() {
    let menuContainer = document.getElementById("menu-container");
    let menuBurger = document.getElementById("menu-burger");

    // @ts-ignore
    menuContainer.style.display="none";
    // @ts-ignore
    menuBurger.style.display="flex";
  }
}
