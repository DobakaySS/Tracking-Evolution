import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('name') profileName ="";
  @Input('imagePath') imagePath ="";

}
