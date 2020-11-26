import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EChartOption } from 'echarts';
import { EchartsService } from 'src/app/services/echarts.service';
import { LineEchartModel } from 'src/app/models/line-echart.model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit, OnDestroy {
  //options for the current chart
  _chartOption: EChartOption;
  subscription: Subscription;
  isDarkMode: boolean = false;
  _theme: string;

  constructor(
    private mainService: MainService) { }

  ngOnInit(): void {    
    this.subscription = this.mainService.getPieChartData().subscribe(data => {
      this._initBasicPieEchart(data);
    })

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private _initBasicPieEchart(chartData: LineEchartModel[]) {    
    //options for the current chart
    this._chartOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'horizontal',
        left: 10,
        data: chartData.map(m => m.name)
    },
    series: [
        {
            name: 'Days of the week',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: chartData.map(m => ({
              name: m.name,
              value: m.value
            }))
        }
    ]
    };
  }


}
