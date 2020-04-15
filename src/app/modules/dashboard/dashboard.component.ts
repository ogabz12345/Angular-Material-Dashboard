import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] =[
  {position: 1, name: 'Hydrogen', weight: 12.45, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 12.45, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 12.45, symbol: 'Li'},
  {position: 4, name: 'Berilium', weight: 12.45, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 12.45, symbol: 'Bo'},
  {position: 6, name: 'Carbon', weight: 12.45, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 12.45, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 12.45, symbol: 'O'},
  {position: 9, name: 'Flourine', weight: 12.45, symbol: 'Fl'},
  {position: 10, name: 'Neon', weight: 12.45, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 12.45, symbol: 'Na'},
  {position: 12, name: 'Magnisium', weight: 12.45, symbol: 'Mg'},
  {position: 13, name: 'Alluminium', weight: 12.45, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 12.45, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 12.45, symbol: 'P'},
  {position: 16, name: 'Sulphur', weight: 12.45, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 12.45, symbol: 'Sl'},
  {position: 18, name: 'Argon', weight: 12.45, symbol: 'Ar'},
  {position: 19, name: 'Potasium', weight: 12.45, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 12.45, symbol: 'Ca'}
]


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
  }

}


