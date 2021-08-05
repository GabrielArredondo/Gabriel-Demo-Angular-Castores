import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  hidden = true;
  items=[];
  constructor(private observer: BreakpointObserver) {
    this.items = [
      { Active: true, MenuText: "Text 1", MenuIcon: "home" }
    ];
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  

  toggleBadgeVisibility() {
   // this.hidden = !this.hidden;
  }
}