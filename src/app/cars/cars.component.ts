import { Component, OnInit } from '@angular/core';
import {cars} from '../../data-base/data';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars = cars ;
  constructor() { }

  ngOnInit(): void {
  }

}
