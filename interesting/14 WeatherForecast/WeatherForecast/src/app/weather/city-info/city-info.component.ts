import {Component, Input, OnInit} from '@angular/core';
import {HourlyInfo} from "../interfaces/hourlyInfo";

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.less']
})
export class CityInfoComponent implements OnInit {

  @Input() list: HourlyInfo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
