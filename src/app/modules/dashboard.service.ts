import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [
      { name: 'Europe', data: [500, 131, 821, 921, 232, 39] },
      { name: 'Africa', data: [100, 331, 81, 521, 22, 9] },
      { name: 'America', data: [300, 321, 1, 1, 242, 32] },
      { name: 'Antartica', data: [10, 131, 121, 91, 942, 3229] },
      { name: 'Asia', data: [30, 31, 8921, 4121, 32, 3249] },
      { name: 'Oceania', data: [530, 31, 321, 92, 932, 329] }

    ]
  }

  cards() {
    return [21, 43, 65, 76, 79]
  }

  pieChart() {
    return [
      {
        name: 'Chrome', y: 61.41, sliced: true, selected: true
      }, {
        name: 'Firefox', y: 11.41
      }, {
        name: 'Internet Explorer', y: 10.05
      }, {
        name: 'Edge', y: 4.16
      }, {
        name: 'Opera', y: 1.6
      }, {
        name: 'Other', y: 2.01
      }
    ];
  }
}
