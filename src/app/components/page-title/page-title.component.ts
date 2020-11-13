import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() infoTitle: string;
  @Input() iconTitle: string;
  @Input() language: string;

  constructor() { }

  ngOnInit(): void {
  }

}
