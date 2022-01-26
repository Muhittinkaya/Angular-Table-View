import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of fake data
  salesPerson: SalesPerson[] = [
    new SalesPerson("Muhittin", "KAYA", "mkaya@gmail.com", 50000),
    new SalesPerson("John", "KENNEDY", "jfka@gmail.com", 500000),
    new SalesPerson("Donald", "TRUMP", "trumpdonald@gmail.com", 10000),
    new SalesPerson("Barrack", "OBAMA", "bobama@gmail.com", 15000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
