import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

 


  constructor() { }

  ngOnInit(): void {
  }

  @Input('activity') activityName="";
  @Input('color') activityColor="";
  @Input('thisWeekHours') thisWeekHours=0;
  @Input('lastWeekHours') lastWeekHours=0;
  @Input() svgContent: string = '';

}
