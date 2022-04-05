import { Component, OnInit } from '@angular/core';
import { ParametersService } from './parameters.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css'],
  providers: [ParametersService]
})
export class ParametersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
