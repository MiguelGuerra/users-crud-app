import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EChartOption } from 'echarts';
import { EchartsService } from 'src/app/services/echarts.service';
import { LineEchartModel } from 'src/app/models/line-echart.model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit, OnDestroy {

  _chartOption: EChartOption;
  subscription: Subscription;
  isDarkMode: boolean = false;
  _theme: string;
  constructor(
    private mainService: MainService,
    private echartService: EchartsService) { }

  ngOnInit(): void {    
    this.subscription = this.mainService.getLineChartData().subscribe(data => {
      this._initBasicLineEchart(data);
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private _initBasicLineEchart(chartData: LineEchartModel[]) {
    this._chartOption = {
      tooltip: {
        show: true
      },
      xAxis: {
        type: 'category',
        data: chartData.map(m => ({
          value: m.name
        }))
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: chartData.map(m => ({
          value: m.value
        })),
        type: 'line'
      }]
    };
  }

}