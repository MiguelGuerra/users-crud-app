import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LineEchartModel } from '../models/line-echart.model';

@Injectable({
  providedIn: 'root'
})
export class EchartsService {

  constructor(private httpClient: HttpClient) { }

  //for the basic line chart- For now its ddummy from external json file
  getBasicLineEchartData(): Observable<LineEchartModel[]> {
    return this.httpClient.get<LineEchartModel[]>('../assets/dummyData/line-echart.json');
  }

  //for the pie chart- For now its ddummy from external json file
  getPieEchartData(): Observable<LineEchartModel[]> {
    return this.httpClient.get<LineEchartModel[]>('../assets/dummyData/pine-echart.json');
  }

}
