import { Component, OnInit } from '@angular/core';
// import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  isVisible = false;
  constructor() {}

  toggleNav(value?: boolean): void {
    if (value) {
      this.isVisible = false;
    } else {
      this.isVisible = !this.isVisible;
    }
  }

  ngOnInit(): void {}
}
