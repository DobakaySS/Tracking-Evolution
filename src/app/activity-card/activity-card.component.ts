import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {

 


  constructor() { }

  ngOnInit(): void {
  }

  @Input('activity') activityName="";
  @Input('color') activityColor="";
  @Input('thisWeekHours') thisWeekHours=0;
  @Input('lastWeekHours') lastWeekHours=0;
  @Input() svgContent: string = '';

}
