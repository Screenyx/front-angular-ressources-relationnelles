import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  public resourcesList: string[] = [];
  public resourcesExist: boolean = false;

  constructor(private homeService: HomeService) { }

  

  ngOnInit(): void {
    this.homeService.getRessources().subscribe(value => {
      console.log("value : ",value);
      if(value != null){
        this.resourcesList = value;
        if(this.resourcesList.length != 0){
          console.log("in true");
          this.resourcesExist = true;
        }
      }
      
    })
  }

}
