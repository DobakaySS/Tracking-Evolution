import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent  {

 


  constructor() { }

  

  @Input('activity') activityName="";
  @Input('color') activityColor="";
  @Input('thisWeekHours') thisWeekHours=0;
  @Input('lastWeekHours') lastWeekHours=0;
  @Input() svgContent: string = '';

}
