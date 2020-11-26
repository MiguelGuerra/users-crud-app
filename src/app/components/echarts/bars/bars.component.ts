import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EChartOption } from 'echarts';
import { EchartsService } from 'src/app/services/echarts.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  _chartOption: EChartOption;
  subscription: Subscription;
  isDarkMode: boolean = false;
  _theme: string;

  constructor(
    private mainService: MainService,
    private echartService: EchartsService) { }

  ngOnInit(): void {
    this.subscription = this.mainService.getBarChartData().subscribe(data => {
      this._initBasicBarsEchart(data);
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private _initBasicBarsEchart(chartData) {
    const arrayOfNames: string[] = [];
    const arrayOfData: string[] = [];

    chartData.map( data => {
      arrayOfNames.push(data.name);
    });

    chartData.map(data => {
      arrayOfData.push(data.value);
    })

    this._chartOption = {
      xAxis: {
        type: 'category',
        data: arrayOfNames
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: arrayOfData,
        type: 'bar'
      }]
    }
  }
}
