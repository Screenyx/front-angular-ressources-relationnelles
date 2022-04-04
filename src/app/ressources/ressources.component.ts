import { Component, OnInit } from '@angular/core';
import { RessourcesService } from './ressources.service';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css'],
  providers: [RessourcesService]
})
export class RessourcesComponent implements OnInit {

  constructor(private ressourceService: RessourcesService) { }

  ngOnInit(): void {
    this.ressourceService.getRessources().subscribe(value => {
      console.log(value);
    });
  }

}
